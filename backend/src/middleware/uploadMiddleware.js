const multer = require("multer");
const path = require("path");

// Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// // File filter (images only)
// function fileFilter(req, file, cb) {
//   const allowedTypes = /jpeg|jpg|png/;
//   const ext = path.extname(file.originalname).toLowerCase();
//   if (allowedTypes.test(ext)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only .jpeg, .jpg, .png files are allowed"), false);
//   }
// }

const upload = multer({ storage });

module.exports = upload;
