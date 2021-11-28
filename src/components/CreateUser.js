import React, { useState } from "react";

function CreateUser() {
  const [username, setusername] = useState("");

  //onSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: username,
    };
    console.log(user);
    // window.location.replace("/");
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
