import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Add = () => {
  const value = { name: "", surname: "", location: "", age: "" };
  const [contact, setContact] = useState(value);
  const navigate = useNavigate();

  const handelInput = (e) => {
    setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onSubmit = () => {
    axios.post("http://localhost:3001/", contact);
    toast.success("CONTACT ADDED");
    navigate("/");
  };

  return (
    <div>
      <Paper
        elevation={4}
        sx={{ marginRight: "30%", marginLeft: "30%", mt: 15, p: 4 }}
      >
        <Typography variant="h5" align="center" m={2}>
          ADD CONTACT
        </Typography>
        <Box sx={{ ml: 7 }}>
          <TextField
            style={{ width: "400px", margin: "5px" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            onChange={handelInput}
          />
          <TextField
            style={{ width: "400px", margin: "5px" }}
            id="outlined-basic"
            label="Surname"
            variant="outlined"
            name="surname"
            onChange={handelInput}
          />
          <TextField
            style={{ width: "400px", margin: "5px" }}
            id="outlined-basic"
            label="Location"
            variant="outlined"
            name="location"
            onChange={handelInput}
          />
          <TextField
            style={{ width: "400px", margin: "5px" }}
            id="outlined-basic"
            label="Age"
            variant="outlined"
            name="age"
            onChange={handelInput}
          />
          <Button variant="outlined" type="submit" onClick={onSubmit}>
            SUBMIT
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
};

export default Add;
