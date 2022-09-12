import React, { useRef, useState } from "react";
import MTMViewTask from "./MTMViewTask";
const axios = require("axios");
const FormData = require("form-data");
export default function MTMDeleteTask() {
  const [taskId, setTaskId] = useState();
  const inputRef = useRef();
  let data = new FormData();

  // Here I defined delete function for button click

  const Delete = () => {
    data.append("taskid", inputRef.current.value);

    // Here I used axios to post data

    axios({
      method: "post",
      url: "https://devza.com/tests/tasks/delete",
      headers: {
        AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a",
      },
      data: data,
    })
      .then((response) => {
        console.log(response);
        response.data.status === "error"
          ? alert(response.data.error)
          : setTaskId(inputRef.current.value);
        alert(response.data.message);
      })
      .catch((error) => alert(error.data.status));
  };
  return (
    <div id="DeleteTask">
      <div id="DeleteBox">
        <input type="number" placeholder="Enter the task id" ref={inputRef} />
        <button onClick={() => Delete(taskId)}>Delete</button>
      </div>
      <h3>Available to Delete</h3>
      <div id="allTasks">
        <MTMViewTask value="" />
      </div>
    </div>
  );
}
