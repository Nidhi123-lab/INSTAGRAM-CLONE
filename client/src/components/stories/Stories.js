import { useContext, useState } from "react";
import "./stories.scss";
import { Link } from "react-router-dom";
import Image from "../../assets/img.png";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";
import { useMutation, useQuery, QueryClient } from "@tanstack/react-query";

const Stories = ({ userId }) => {
  const [file, setFile] = useState(null);
  const { currentUser } = useContext(AuthContext);


  const { isLoading, error, data } = useQuery({
    queryKey: ["stories", userId],
    queryFn: ()=> makeRequest.get("/stories?userId=`" + userId).then((res)=>res.data),
  });
  
    const upload = async () => {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const res = await makeRequest.post("/upload", formData);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
  
    const mutation = useMutation({
      mutationFn: (newStory) => {
        return makeRequest.post("/stories", newStory).then((res)=>res.data)
      },
      onSuccess: () => {
        // Invalidate and refetch
        QueryClient.invalidateQueries(["stories"]);
      },
    });

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({img: imgUrl });
    setFile(null);
  };
  

  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <Link
          to={`/profile/${currentUser.userId}`}
          style={{ textDecoration: "none", color: "inherit" }}
        ></Link>
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
          </div>
          <div className="right">
            <button onClick={handleClick}>+</button>
          </div>
        </div>
      </div>
        {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data?.map((story) => (
          <div className="story" key={story.id}>
              <img src={"/upload/" + story.img} alt="Story Image" />
              <span>{story.name}</span>
            </div>
            
          ))}    
    </div>
  );
};

export default Stories;