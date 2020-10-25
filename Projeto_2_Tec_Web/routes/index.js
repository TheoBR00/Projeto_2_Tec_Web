var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET getEquipePokémons page. */
router.get('/equipelist', function(req, res){
	var db = require("../db");
	var Equipes = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
	Equipes.find({}).lean().exec(
		function (e, docs){
			res.render('equipelist', { "equipelist": docs});
		});
});

module.exports = router;
