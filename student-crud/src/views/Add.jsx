import { useState } from "react";
import { post } from "../services/api.service";
import { useNavigate } from "react-router-dom";

function Add() {
  let navigate = useNavigate();

  const [formdata, setformdata] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    await post("user", formdata);
    navigate("/");
  };

  return (
    <div className="view add-view">
      <div className="form">
        <div className="form-input">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            onChange={(e) => {
              setformdata((prevState) => ({
                ...prevState,
                first_name: e.target.value,
              }));
            }}
          />
        </div>
        <div className="form-input">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            onChange={(e) => {
              setformdata((prevState) => ({
                ...prevState,
                last_name: e.target.value,
              }));
            }}
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => {
              setformdata((prevState) => ({
                ...prevState,
                email: e.target.value,
              }));
            }}
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setformdata((prevState) => ({
                ...prevState,
                password: e.target.value,
              }));
            }}
          />
        </div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default Add;
