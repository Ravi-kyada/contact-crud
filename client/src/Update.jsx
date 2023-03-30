import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
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
        toast.success("CONTACT UPDATED");
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Paper
        elevation={4}
        sx={{ marginRight: "30%", marginLeft: "30%", mt: 15, p: 4 }}
      >
        <Typography variant="h5" align="center" m={2}>
          UPDATE CONTACT
        </Typography>
        <Box sx={{ ml: 7 }}>
          <TextField
            style={{ width: "400px", margin: "5px" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            value={name || ""}
            onChange={handelInput}
          />
          <TextField
            style={{ width: "400px", margin: "5px" }}
            id="outlined-basic"
            label="Surname"
            variant="outlined"
            name="surname"
            value={surname || ""}
            onChange={handelInput}
          />
          <TextField
            style={{ width: "400px", margin: "5px" }}
            id="outlined-basic"
            label="Location"
            variant="outlined"
            name="location"
            value={location || ""}
            onChange={handelInput}
          />
          <TextField
            style={{ width: "400px", margin: "5px" }}
            id="outlined-basic"
            label="Age"
            variant="outlined"
            name="age"
            value={age || ""}
            onChange={handelInput}
          />
          <Button variant="outlined" type="submit" onClick={onSubmit}>
            UPDATE
          </Button>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button sx={{ m: 2 }} variant="outlined">
              GO BACk
            </Button>
          </Link>
        </Box>
      </Paper>
    </div>
  );
}

export default Update;
