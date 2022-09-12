import React, { useRef } from "react";
const axios = require("axios");
const FormData = require("form-data");
export default function MTMUpdateTask() {

 // Here I added useRef to fetch all the input data

  const taskIdRef = useRef();
  const messageRef = useRef();
  const priorityRef = useRef();
  const assignRef = useRef();

  // Here I created data object

  let data = new FormData();

// Here I defined update function for button click

  const Update = () => {
    data.append("message", messageRef.current.value);
    data.append("due_date", "2020-09-19 12:12:12");
    data.append("priority", priorityRef.current.value);
    data.append("assigned_to", assignRef.current.value);
    data.append("taskid", taskIdRef.current.value);
    axios({
      method: "post",
      url: "https://devza.com/tests/tasks/update?=UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a",
      headers: {
        AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a",
      },
      data: data,
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <div id="InputField">
      <h3>Update Task</h3>
      <label htmlFor="taskId">Task Id
        <input type="number" id="taskId" ref={taskIdRef} />
      </label>
      <textarea
        name="Message"
        id=""
        cols="60"
        rows="4"
        placeholder="Type your message here"
        ref={messageRef}
      ></textarea>
      <label htmlFor="AssignedPerson">
        Assign to
        <input type="text" id="AssignedPerson" ref={assignRef} />
      </label>
      <label htmlFor="Priority">
        Set Priority
        <select name="Priority" id="Priority" ref={priorityRef}>
          <optgroup label="Priority">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </optgroup>
        </select>
      </label>
      <button onClick={() => Update()}>Create</button>
    </div>
  );
}
