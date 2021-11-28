import React from "react";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useParams } from "react-router";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

function EditExcersise(props) {
  //setting up the diffrent states that our component will have
  const [username, setusername] = useState("");
  const [description, setdescription] = useState("");
  const [duration, setduration] = useState(0);
  const [date, setdate] = useState(new Date());
  const [users, setusers] = useState([]);
  const { id } = useParams();

  //use effect component did mount
  useEffect(() => {
    axios.get("http://localhost:3001/api/v1/exercises/" + id).then((res) => {
      setusername(res.data.excersise.username);
      setdescription(res.data.excersise.description);
      setduration(new Number(res.data.excersise.duration));
      setdate(new Date(res.data.excersise.date));
    });

    axios.get("http://localhost:3001/api/v1/users").then((res) => {
      console.log(res.data.data);
      setusers(res.data.data.map((excersise) => excersise.username));
    });
  }, []);

  //onchange listners

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

  //onsubmit

  const onSubmit = async (e) => {
    e.preventDefault();
    const updatedExcersise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
      users: users,
    };
    await axios
      .patch(
        "http://localhost:3001/api/v1/exercises/update/" + id,
        updatedExcersise
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    window.location.replace("/");
  };

  return (
    <div className="container-fluid my-3">
      <h3>Edit Excersise</h3>

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

export default EditExcersise;
