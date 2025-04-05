const express = require("express");
const { connecToMongoDB } = require("./connectMongoDB");

const userRoutes = require("./routes/userRoute");


connecToMongoDB('mongodb://127.0.0.1:27017/school_project');

const app = express();
const PORT = 5000;

app.use(express.json()); // Neccessary for converting the raw data into parsed data. 
app.use(express.urlencoded({ extended: false }));  // For handeling form data...

app.get('/', userRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));