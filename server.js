const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDB();
const app = express();

const port  = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoute"));
app.use("/api/users", require("./routes/userRoute"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})