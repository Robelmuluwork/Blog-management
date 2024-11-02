const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes.js");
// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// Default route
app.get("/", (req, res) => {
  res.send("Blog API running...");
});

// Auth routes
app.use("/api/auth", authRoutes); // Ensure authRoutes is a valid middleware function
app.use("/api/posts", postRoutes); // Ensure postRoutes is a valid middleware function

//commnet routes
app.use("/api/comments", commentRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
