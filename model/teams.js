const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  nama: { type: String, required: true },
  jabatan: { type: String, required: true },
  email: { type: String, required: true },
  gambar: { type: String, required: true },
});

const Teams = mongoose.model("Teams", teamSchema);
module.exports = Teams;
