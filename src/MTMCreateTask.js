import { useRef } from "react";
import "./MTMCreateTask.css";
const axios = require("axios");
const FormData = require("form-data");
export default function MTMCreateTask() {

  // Here I added useRef to fetch all the input data

  const messageRef = useRef();
  const priorityRef = useRef();
  const assignRef = useRef();

// Here I created data object

  let data = new FormData();

  // Here I defined create function for button click

  const Create = () => {

    //Here I created Date object 

    var myDate = new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000);
    const y = myDate.getFullYear();
    const m = myDate.getMonth();
    const d = myDate.getDay();
    const h = myDate.getHours();
    const min = myDate.getMinutes();
    const sec = myDate.getSeconds();
    var sdate = `${y}-${m + 1}-${d} ${h}:${min}:${sec}`;

    // Here I append the data to json file

    data.append("message", messageRef.current.value);
    data.append("assigned_to", assignRef.current.value);
    data.append("due_date", sdate);
    data.append("priority", priorityRef.current.value);

    // Here I used axios to post data

    axios({
      method: "post",
      url: "https://devza.com/tests/tasks/create",
      headers: {
        AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a",
      },
      data: data,
    })
      .then((response) => {
        response.data.status === "error"
          ? alert(response.data.error)
          : alert(response.data.status);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div id="InputField">
        <h3>Create Task</h3>
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
          <input type="number" id="AssignedPerson" ref={assignRef} />
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
        <button onClick={Create}>Create</button>
      </div>
    </>
  );
}
