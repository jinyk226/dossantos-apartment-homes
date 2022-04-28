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

  const inputStyle = {
    borderColor: '#29324125',
    borderRadius: '3px',
    borderWidth: '1px',
    padding: '5px 10px',
    // transition: 'ease-in 0.3s',
    // "&:hover": {
    //   borderStyle: 'solid',
    //   borderColor: '#888888',
    // }
  }


  const submitStyle = {
    background: '#EE6C4D',
    borderStyle: 'none',
    boxShadow: '2px 2px 3px #888888',
    borderRadius: '3px',
    color: 'white',
    fontWeight: 'bold',
    padding: '5px',
  }

  return (
    <div
      className="center-flex"
      style={{ backgroundColor: "#29324125", height: "100vh" }}
    >
      <NavBar pos="static" bgColor="#293241" />

      <div id="auth-div">
        <img style={{width: '200px'}} src="https://i.imgur.com/5mnfdiE.png" />
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={info.email}
            name="email"
            onChange={handleChange}
            autoComplete="none"
            placeholder="Email"
            style={inputStyle}
          />
          <br />
          <input
            type="password"
            value={info.password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
            style={inputStyle}
          />
          <br />
          <input 
            type="submit" 
            value="Submit" 
            style={submitStyle}
          />
        </form>
      </div>
    </div>
  );
}

export default auth;
