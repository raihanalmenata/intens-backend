const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  nama: { type: String, required: true },
  telepon: { type: String, required: true },
  email: { type: String, required: true },
  gambar: { type: String, required: true },
});

const Clients = mongoose.model("Clients", clientSchema);
module.exports = Clients;
