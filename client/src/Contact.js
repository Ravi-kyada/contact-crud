import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";

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
    toast.success("DELETED SUCCESSFULLY");
  };

  return (
    <>
      <Typography variant="h5" align="center" sx={{ p: 2 }}>
        CONTACT
      </Typography>
      <Link to="/add" style={{ textDecoration: "none" }}>
        <Stack
          direction="row"
          justifyContent="flex-end"
          sx={{ mr: 34.7, mb: 2 }}
        >
          <Button variant="contained">
            ADD CONTACT <AddIcon />
          </Button>
        </Stack>
      </Link>
      <Box sx={{ width: 1400, m: 5 }}>
        <Grid container pl={25}>
          {cont.map((contact, index) => {
            return (
              <Grid item xs={3} m={1}>
                <Box sx={{ maxWidth: 345, maxHeight: 200 }} key={contact._id}>
                  <Card
                    sx={{ maxWidth: 345, Height: 500 }}
                    style={{ backgroundColor: "#ECF2FF" }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Typography variant="h6">No. {index + 1}</Typography>
                        <Typography>Name: {contact.name}</Typography>
                        <Typography>SurName: {contact.surname}</Typography>
                        <Typography>Location: {contact.location}</Typography>
                        <Typography>Age: {contact.age}</Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        onClick={() => handleDelete(contact._id)}
                        size="small"
                        variant="outlined"
                      >
                        DELETE
                      </Button>
                      <Link
                        to={`/update/${contact._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button size="small" variant="outlined" sx={{ ml: 2 }}>
                          UPDATE
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
