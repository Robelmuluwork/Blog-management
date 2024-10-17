const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
//load env variables
dotenv.config();

//initialize express
const app = express();

//middleware
app.use(express.json());

//connect to database

connectDB();

//default route
app.get("/", (req, res) => {
  res.send("blog api runnig.....");
});

//auth routes
app.use("/api/auth", authRoutes);

//start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
