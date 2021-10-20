const express = require("express");
const connect = require("./database/connection");
const cors = require("cors");
require("dotenv").config({ path: "../config.env" });
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

// db connection
connect();

// routes
app.use("/api", require("./router/router"));
app.use("/api/clients", require("./controller/clients"));
app.use("/api/teams", require("./controller/teams"));
app.use("/api/projects", require("./controller/projects"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
