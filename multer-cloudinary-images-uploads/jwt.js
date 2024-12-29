const jwt = require("jsonwebtoken");
require("dotenv").config();

// Function to encode (generate) a JWT
function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET);
}

const payload = { lesson: "cloudinaryUpload" };
const token = generateToken(payload);
console.log("Generated Token:", token);
