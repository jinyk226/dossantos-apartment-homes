import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {login} from '../../store/auth'
import NavBar from "../navbar/navbar";

import './auth.css'

function auth() {

  const auth = useSelector((state) => state.auth.value)
  const dispatch = useDispatch()

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const [errStyle, setErrStyle] = useState({
    display: 'none'
  })

  useEffect(() => {
    console.log('useEffect entered')
  }, [auth])

  const handleChange = (e) => {
    let field = e.target.name;
    let input = e.target.value;
    setInfo({ ...info, [field]: input });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(info);
    dispatch(login())
    console.log('auth:', auth)
    if (auth && auth.err) {
      dispatch(handleErr())
    }
  };



  return (
    <div
      className="center-flex"
      style={{ backgroundColor: "#29324125", height: "100vh" }}
    >
      <NavBar pos="static" bgColor="#293241" />

      <div id="auth-div">
        <img style={{width: '200px'}} src="https://i.imgur.com/5mnfdiE.png" />
        <div id="err-div" style={errStyle}>Error: {auth && auth.err}</div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={info.email}
            name="email"
            onChange={handleChange}
            autoComplete="none"
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            value={info.password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <br />
          <input 
            type="submit" 
            value="Submit"
            id="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default auth;
