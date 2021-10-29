const express = require("express");
const multer = require("multer");
const router = express.Router();
const Teams = require("../model/teams");
const auth = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads/teams");
  },

  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const uploads = multer({ storage: storage });

router.get("/", (req, res) => {
  Teams.find()
    .then((team) => res.json(team))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.post("/add", uploads.single("gambar"), (req, res) => {
  const newTeam = new Teams({
    nama: req.body.nama,
    jabatan: req.body.jabatan,
    gambar: req.file.originalname,
  });

  newTeam
    .save()
    .then(() => res.json("added succes!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.get("/:id", (req, res) => {
  Teams.findById(req.params.id)
    .then((team) => res.json(team))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.put("/update/:id", uploads.single("gambar"), (req, res) => {
  Teams.findById(req.params.id)
    .then((team) => {
      team.nama = req.body.nama;
      team.jabatan = req.body.jabatan;
      team.gambar = req.file.originalname;

      team
        .save()
        .then(() => res.json("updated success!"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.delete("/:id", (req, res) => {
  Teams.findByIdAndDelete(req.params.id)
    .then(() => res.json("deleted success!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
