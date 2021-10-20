const express = require("express");
const multer = require("multer");
const router = express.Router();
const Projects = require("../model/projects");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../public/uploads/projects");
  },

  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const uploads = multer({ storage: storage });

router.get("/", (req, res) => {
  Projects.find()
    .then((projects) => res.json(projects))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.post("/add", uploads.single("gambar"), (req, res) => {
  const newProject = new Projects({
    judul: req.body.judul,
    deskripsi: req.body.deskripsi,
    gambar: req.file.originalname,
  });

  newProject
    .save()
    .then(() => res.json("added succes!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.get("/:id", (req, res) => {
  Projects.findById(req.params.id)
    .then((projects) => res.json(projects))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.put("/update/:id", uploads.single("gambar"), (req, res) => {
  Projects.findById(req.params.id)
    .then((projects) => {
      projects.judul = req.body.judul;
      projects.deskripsi = req.body.deskripsi;
      projects.gambar = req.file.originalname;

      projects
        .save()
        .then(() => res.json("deleted success!"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.delete("/:id", (req, res) => {
  Projects.findByIdAndDelete(req.params.id)
    .then(() => res.json("deleted success!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
