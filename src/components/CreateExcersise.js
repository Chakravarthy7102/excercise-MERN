import React from "react";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
//npm i react-datepicker

//on submit button handler

function CreateExcersise() {
  //setting up the diffrent states that our component will have
  const [username, setusername] = useState("");
  const [description, setdescription] = useState("");
  const [duration, setduration] = useState(0);
  const [date, setdate] = useState(new Date());
  const [users, setusers] = useState([]);

  //use ref
  // const selectref = useRef();

  //useEffect is same as the componet did mount react class lifecycle method
  useEffect(() => {
    setusers(["name", "akira", "kakashi"]);
    setusername("akira");
    setdescription("the god of devils");
    setduration(10);
    setdate(new Date().getTime());
  }, []);

  //onchange in username
  const onChangeUsername = (e) => {
    setusername(e.target.value);
  };
  //onchange onChangeDescription
  const onChangeDescription = (e) => {
    setdescription(e.target.value);
  };

  //onChangeDuration
  const onChangeDuration = (e) => {
    setduration(e.target.value);
  };
  //onChangeDate
  const onChangeDate = (date) => {
    setdate(date);
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    e.preventDefault();
    const excersice = {
      username: username,
      description: description,
      duration: duration,
      date: date,
      users: users,
    };
    console.log(excersice);
    window.location.replace("/");
  };

  return (
    <div className="container-fluid my-3">
      <h3>Create New Exercise Log</h3>

      <form onSubmit={onSubmit}>
        <div className="form-group my-3 container">
          <label>Username: </label>
          <select
            selectref="userInput"
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          >
            {users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group my-3 container">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group my-3 container">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group container my-3">
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={onChangeDate} />
          </div>
        </div>

        <div className="form-group  container my-3">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-dark"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateExcersise;
