import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [cont, setCont] = useState([]);
  useEffect(() => {
    function fetchData() {
      axios.get("http://localhost:3001/").then((responce) => {
        setCont(responce.data);
      });
    }
    fetchData();
  });

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/${id}`);
    console.log("deleted");
  };

  return (
    <>
      <Link to="/add">
        <button>ADD CONTACT</button>
      </Link>
      {cont.map((contact, index) => {
        return (
          <div key={contact._id}>
            <h1>{index + 1}</h1>
            <h2>{contact.name}</h2>
            <h2>{contact.surname}</h2>
            <h2>{contact.location}</h2>
            <h2>{contact.age}</h2>
            <button onClick={() => handleDelete(contact._id)}>DELETE</button>
            <Link to={`/update/${contact._id}`}>
              <button>UPDATE</button>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Contact;
