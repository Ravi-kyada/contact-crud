import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const value = { name: "", surname: "", location: "", age: "" };
  const [contact, setContact] = useState(value);
  const navigate = useNavigate();

  const handelInput = (e) => {
    setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onSubmit = () => {
    axios.post("http://localhost:3001/", contact);
    console.log("contact created");
    navigate("/");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="NAME"
        name="name"
        onChange={handelInput}
      />
      <input
        type="text"
        placeholder="SURNAME"
        name="surname"
        onChange={handelInput}
      />
      <input
        type="text"
        placeholder="LOCATION"
        name="location"
        onChange={handelInput}
      />
      <input
        type="number"
        placeholder="AGE"
        name="age"
        onChange={handelInput}
      />
      <button type="submit" onClick={onSubmit}>
        SUBMIT
      </button>
      <Link to="/">
        <button>GO BACk</button>
      </Link>
    </div>
  );
};

export default Add;
