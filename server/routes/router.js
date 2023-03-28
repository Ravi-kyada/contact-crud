const express = require("express");
const router = express.Router();
const contact = require("../models/contact.model");

router.get("/", (req, res) => {
  contact
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  contact
    .findById(req.params.id)
    .then((data) => {
      if (data) res.send(data);
      res.json({ error: "not found" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  contact
    .deleteOne({ _id: id })
    .then(() => {
      res.json("data deleted");
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  contact
    .create(req.body)
    .then(() => {
      res.json("GOT DATA");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  contact
    .updateOne({ _id: id }, req.body)
    .then(() => {
      res.json("data updated");
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
