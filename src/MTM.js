import React from "react";
import MTMNav from "./MTMNav";
import MTMSideBar from "./MTMSideBar";
import "./MTM.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Axios from "./MTMCreateTask";
import MTMUpdateTask from "./MTMUpdateTask";
import MTMDeleteTask from "./MTMDeleteTask";
import MTMViewTask from "./MTMViewTask";
export default function MiniTaskManager() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div id="Main">
          <MTMNav />
          <div id="section">
            <MTMSideBar />
            <div id="TaskSection">
              <Routes>
                <Route path="/" element={<MTMViewTask/>}></Route>
                <Route path="/create" element={<Axios />}></Route>
                <Route path="/update" element={<MTMUpdateTask />}></Route>
                <Route path="/delete" element={<MTMDeleteTask />}></Route>
                <Route path="*" element={<MTMViewTask/>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
