const express = require("express");
const { fileRouter } = require("./src/router/fileRouter.js");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();

const uploadDir = path.join(__dirname, "upoads");
if (!fs.existsSync()) {
  fs.mkdirSync(uploadDir);
}

app.use(cors());
app.use("/src/uploads", express.static("src/uploads"));

app.use("/files", fileRouter);

app.use("/", (req, res) => {
  res.send("Welcome to file/image upload");
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
