const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  judul: { type: String, required: true },
  deskripsi: { type: String, required: true },
  gambar: { type: String, required: true },
});

const Projects = mongoose.model("Projects", projectSchema);
module.exports = Projects;
