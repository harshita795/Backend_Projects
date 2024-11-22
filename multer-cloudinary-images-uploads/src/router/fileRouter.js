const multer = require("multer");
const { Router } = require("express");
const upload = require("../middleware/fileUpload.js");
const { UNEXPECTED_FILE_TYPE } = require("../constants/file.js");
const { fileController } = require("../controllers/fileController.js");
const { imageResize } = require("../middleware/imageResize.js");
const { isFilePresent } = require("../middleware/validators/isFilePresent.js");
const authenticateJWT = require("../middleware/authentication.js");

const fileRouter = Router();

fileRouter.post(
  "/upload",
  authenticateJWT,
  function (req, res, next) {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        if (err.code === UNEXPECTED_FILE_TYPE.code) {
          return res.status(400).json({ error: { description: err.field } });
        }
      } else {
        return res.status(500).json({ error: { description: err.message } });
      }
    });

    next();
  },
  fileController,
  imageResize,
  isFilePresent
);
