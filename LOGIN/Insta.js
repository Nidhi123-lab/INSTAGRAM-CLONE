import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "./image/download.png";
import img1 from "./image/th.jpg";
import img2 from "./image/icons8-home-24.png";
import img3 from "./image/download (1).png";
import img4 from "./image/download(2).png";
//import {Link} from "react-router-dom";

function Insta()
{
    return(
        
    <>
    <nav className="navbar">
        <img src={img1} className="logo" alt="Instagram Logo"/>
        <form className="search-box">
            <input type="text" placeholder="Search" name="search-query" id="search-input"/>
            <button className="search-btn" type="submit">
                <img src={img}className="search-icon " alt="Search Icon"/>
    </button>
        </form>
        <div className="nav-links">
            <a href="/Home" className="nav-links">
                <img src={img2}className="nav-icon" alt="Home Icon"/>
            </a>
            
            <div className="activity-log">
                {/*Display recent activity here
                Example: User @siri liked your post
                Show user avatars and post <thumbnails></thumbnails>*/}
            </div>
            <a href="/" className="nav-links">
                <img src={img4}className="nav-icon" alt="Add Icon"/>
            </a>
            <a href="/" className="nav-links">
                <img src={img3}className="nav-icon user-profile" alt="User Profile"/>
            </a>
        </div>
    </nav>
</>
)}
export default Insta