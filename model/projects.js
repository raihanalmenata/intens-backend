const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  judul: { type: String },
  deskripsi: { type: String },
  gambar: { type: String },
});

const Projects = mongoose.model("Projects", projectSchema);
module.exports = Projects;
