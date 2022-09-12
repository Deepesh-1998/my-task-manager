import React, { useState } from "react";
const axios = require("axios");

export default function MTMViewTask() {
  const [data, setData] = useState(JSON.stringify([]));
  const [searchData, setSearchData] = useState("");

  // Here I used axios to get data

  axios({
    method: "get",
    url: "https://devza.com/tests/tasks/list",
    headers: {
      AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a",
    },
  })
    .then((response) => setData(JSON.stringify(response.data.tasks)))
    .catch((error) => console.log(error));

// Here I parsed the all data in allData

  var allData = JSON.parse(data);

// Here I ran the loop over data to view task based on the date

  for (let i = 0; i < allData.length; i++) {
    for (let j = i + 1; j < allData.length; j++) {
      if (allData[i].due_date > allData[j].due_date) {
        let temp = allData[i];
        allData[i] = allData[j];
        allData[j] = temp;
      }
    }
  }

  // Here I ran the loop over data to view task based on the priority

  for (let i = 0; i < allData.length; i++) {
    for (let j = i + 1; j < allData.length; j++) {
      if (allData[i].priority > allData[j].priority) {
        let temp = allData[i];
        allData[i] = allData[j];
        allData[j] = temp;
      }
    }
  }

// Here I added if else statement to control search data

  if (searchData === "") {
  } else {
    allData = allData.filter((val) => {
      return val.message.includes(searchData);
    });
  }
  return (
    <div id="viewPage">
      <input
        type="search"
        placeholder="Enter task message"
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
      />
      <div id="viewTasks">
        
        {allData.map((e, index) => (
          <div className="box" key={index}>
            <p>{"Task id: " + e.id}</p>
            <p>{"Assigned to: " + e.assigned_name}</p>
            <p>{"Priority: " + e.priority}</p>
            <p>{"Message: " + e.message}</p>
            <p>{"Due Date: " + e.due_date}</p>
          </div>
        ))}
        </div>
      
    </div>
  );
}
