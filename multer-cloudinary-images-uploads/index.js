const express = require("express");
const { fileRouter } = require("./src/router/fileRouter.js");
const { fileURLToPath } = require("url");
const fs = require("fs");
const path = require("path");

const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, "upoads");
if (!fs.existsSync()) {
  fs.mkdirSync(uploadDir);
}

app.use("/src/uploads", express.static("src/uploads"));

app.use("/files", fileRouter);

app.use("/", (req, res) => {
  res.send("Welcome to file/image upload");
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
