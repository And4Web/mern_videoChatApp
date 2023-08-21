const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// import Routes
const authRoutes = require('./routers/authRoutes');

// implement Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res)=>{
  return res.status(200).json({"message": "Hello world!"})
})

// Create server
const server = http.createServer(app);

// Connect Database
mongoose.connect(process.env.MONGO_URI).then(()=>{
  server.listen(PORT, ()=>{
    console.log("~-MongoDB connection successful.");
    console.log(`~-SERVER is listening at PORT-${PORT}.`);
  });
}).catch(err=>{
  console.log("~-MongoDB connection failed. Server failed to start.");
  console.error("~-MongoDB ERROR: ", err);
})

