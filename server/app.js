const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3001;
app.use(cors());

//db connection
require("./DB");
const routs = require("./routes/router");

//middleware
app.use(bodyparser.json());
app.use(routs);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`SERVER RUNING ON PORT: ${PORT}!`));
