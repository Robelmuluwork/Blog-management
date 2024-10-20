const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const { getAllPosts } = require("../controllers/userController");

// router.get("/author", getAllPosts);

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
