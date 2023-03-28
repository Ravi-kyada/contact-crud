import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import React from "react";

function Update() {
  const value = { name: "", surname: "", location: "", age: null };
  const [update, setUpdate] = useState(value);
  const { name, surname, location, age } = update;
  const { id } = useParams();
  const navigate = useNavigate();
  const handelInput = (e) => {
    setUpdate((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onSubmit = () => {
    console.log(id);
    try {
      axios.put("http://localhost:3001/" + id, update).then(() => {
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="NAME"
        name="name"
        value={name || ""}
        onChange={handelInput}
      />
      <input
        type="text"
        placeholder="SURNAME"
        name="surname"
        value={surname || ""}
        onChange={handelInput}
      />
      <input
        type="text"
        placeholder="LOCATION"
        name="location"
        value={location || ""}
        onChange={handelInput}
      />
      <input
        type="number"
        placeholder="AGE"
        name="age"
        value={age || ""}
        onChange={handelInput}
      />
      <button type="submit" onClick={onSubmit}>
        UPDATE
      </button>
      <Link to="/">
        <button>GO BACk</button>
      </Link>
    </div>
  );
}

export default Update;
