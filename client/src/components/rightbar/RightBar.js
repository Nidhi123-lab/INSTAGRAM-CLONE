import "./rightBar.scss";
import img from "../../assets/OIP.jpeg";
import img1 from "../../assets/OIP (1).jpeg";
import img2 from "../../assets/OIP (2).jpeg";
import img3 from "../../assets/OIP (3).jpeg";
import img4 from "../../assets/OIP (4).jpeg";

const RightBar = () => {
    return (
      <div className="rightBar">
        <div className="container">
          <div className="item">
            <span>Suggestions For You</span>
            <div className="user">
              <div className="userInfo">
                <img
                  src={img} alt=""
                />
                <span>shiva</span>
              </div>
              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src={img1}alt=""
                />
                <span>arti</span>
              </div>
              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
          </div>
          <div className="item">
            <span>Latest Activities</span>
            <div className="user">
              <div className="userInfo">
                <img
                  src={img3}alt=""
                />
                <p>
                  <span>priya</span> changed their cover picture
                </p>
              </div>
              <span>1 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src={img3}alt=""
                />
                <p>
                  <span>ayansh</span> changed their cover picture
                </p>
              </div>
              <span>1 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src={img}alt=""
                />
                <p>
                  <span>pranshu</span> changed their cover picture
                </p>
              </div>
              <span>1 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src={img4}alt=""
                />
                <p>
                  <span>punam</span> changed their cover picture
                </p>
              </div>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="item">
            <span>Online Friends</span>
            <div className="user">
              <div className="userInfo">
                <img
                  src={img4}alt=""
                />
                <div className="online" />
                <span>neha</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src={img2}alt=""
                />
                <div className="online" />
                <span>siya</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src={img3}alt=""
                />
                <div className="online" />
                <span>diya</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src={img}alt=""
                />
                <div className="online" />
                <span>swati</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src={img1}alt=""
                />
                <div className="online" />
                <span>Nikhil</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src={img4}alt=""
                />
                <div className="online" />
                <span>monika</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src={img3}alt=""
                />
                <div className="online" />
                <span>divyansh</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src={img1} alt=""
                />
                <div className="online" />
                <span>old_man</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src={img}alt=""
                />
                <div className="online" />
                <span>anoop</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src={img4}alt=""
                />
                <div className="online" />
                <span>birds</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="online" />
                <span>Jane Doe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default RightBar;