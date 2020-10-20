const express = require("express");
const connectDB = require('./config/db');
const chalk = require('chalk');

const app = express();

// connect Database
connectDB();

// Init Middleware
app.use(express.json({
    extended: false
}));

app.get("/", (req, res) => res.send("API Running..."));

// Define Routes 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(chalk.bgWhite.greenBright.italic(`Server started on Port ${PORT}`)));
