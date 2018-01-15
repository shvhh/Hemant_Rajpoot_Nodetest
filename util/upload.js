const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './static/');
  },
  filename: function(req, file, cb) {
    cb(null, '' + Date.now());
  }
});
const upload = multer({ storage: storage });
module.exports = upload;
