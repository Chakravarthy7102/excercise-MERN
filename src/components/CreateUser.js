import React, { useState } from "react";
import axios from "axios";

const POST_URL = "http://localhost:3001/api/v1/users/add";

function CreateUser() {
  const [username, setusername] = useState("");

  //onSubmit
  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
    };

    //making the post request to the sever

    try {
      await axios.post(POST_URL, user).then((res) => console.log(res.data));
    } catch (error) {
      console.log(error);
    }

    setusername("");
  };

  //onChangeUsername

  const onChangeUsername = (e) => {
    setusername(e.target.value);
  };

  return (
    <div className="container my-3">
      <h3>Create New User</h3>

      <form onSubmit={onSubmit}>
        <div className="form-group my-3">
          <label>
            <b>Username:</b>
          </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group my-3">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
