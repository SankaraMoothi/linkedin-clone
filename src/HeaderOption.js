import React from "react";
import Avatar from "@mui/material/Avatar";
import "./HeaderOption.css";
import { useSelector } from "react-redux";
import { selectuser } from "./features/counter/userSlice";

function HeaderOption({ avator, Icon, title, onClick }) {
  const user = useSelector(selectuser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avator && (
        <Avatar className="headerOption__icon">{user?.email[0]}</Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
