const express = require("express");
const connectDB = require('./config/db');

const app = express();

// connect Database
connectDB();

app.get("/", (req, res) => res.send("API Running..."));

// Define Routes 
app.use('/api/user', require('./routes/api/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
