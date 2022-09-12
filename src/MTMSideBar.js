import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./MTMSideBar.css";
export default function MTMSideBar() {
  return (
    <>
      <div id="SideBar">
        <div id="SideBarTasks">
          <span>
            <Link to="/create">CREATE TASK</Link>
          </span>
          <span>
            <Link to="/update">UPDATE TASK</Link>
          </span>
          <span>
            <Link to="/delete">DELETE TASK</Link>
          </span>
          <span>
            <Link to="/">VIEW TASK</Link>
          </span>
        </div>
      </div>
      <Outlet />
    </>
  );
}
