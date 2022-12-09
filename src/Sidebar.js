import React from "react";
import Avatar from "@mui/material/Avatar";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectuser } from "./features/counter/userSlice";
function Sidebar() {
  const user = useSelector(selectuser);
  let recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
          alt="Naruto_fight_seen_image"
        />
        <Avatar className="sidebar__Avatar" src={user.photoUrl}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed you</p>
          <p className="sidebar__statNumber">2,545</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">2,440</p>
        </div>
      </div>
      <div className="sidebar__button">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("Nodejs")}
        {recentItem("MaterialUI")}
        {recentItem("Design")}
        {recentItem("Developer")}
      </div>
    </div>
  );
}

export default Sidebar;
