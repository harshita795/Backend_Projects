const multer = require("multer");
const path = require("path");
const { fileTypeValidator } = require("../utils/fileTypeValidator.js");
const { UNEXPECTED_FILE_TYPE } = require("../constants/file.js");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const isFileTypeAllowed = fileTypeValidator(file);
    if (isFileTypeAllowed) {
      return cb(null, true);
    } else {
      cb(
        new multer.MulterError(
          UNEXPECTED_FILE_TYPE.code,
          UNEXPECTED_FILE_TYPE.message
        )
      );
    }
  },
}).array("file", 1);

module.exports = { upload };
