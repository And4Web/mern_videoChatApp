const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

mongoose.connect(process.env.MONGO_URI).then(()=>{
  server.listen(PORT, ()=>{
    console.log("~-MongoDB connection successful.");
    console.log(`~-SERVER is listening at PORT-${PORT}.`);
  });
}).catch(err=>{
  console.log("~-MongoDB connection failed. Server failed to start.");
  console.error("~-MongoDB ERROR: ", err);
})

