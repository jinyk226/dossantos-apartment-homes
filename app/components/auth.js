import React, { useState } from "react";
import NavBar from "./navbar";

function auth() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    let field = e.target.name;
    let input = e.target.value;
    setInfo({ ...info, [field]: input });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    //send to db
  };

  const passHash = (len) => {
    let hash = "";
    for (let i = 0; i < len; i++) {
      hash += "*";
    }
    return hash;
  };

  return (
    <div
      className="center-flex"
      style={{ backgroundColor: "#f4f4f4", height: "100vh" }}
    >
      <NavBar pos="static" bgColor="#293241" />

      <div id="auth-div">
        <h2>Dos Santos Apartment Homes</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={info.email}
              name="email"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={info.password}
              name="password"
              onChange={handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default auth;
