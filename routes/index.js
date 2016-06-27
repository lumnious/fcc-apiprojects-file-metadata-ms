var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest:'./public/images/'});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API Basejump: File Metadata Microservice'});
});

router.post('/', upload.single('file'), function (req, res, next) {
	console.log(req.file.size);
	var out = '{"size": ' + req.file.size + '}';
	res.render('index', { title: 'API Basejump: File Metadata Microservice'  , output: out});
});

module.exports = router;