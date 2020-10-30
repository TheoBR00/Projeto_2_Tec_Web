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
			
			res.json(docs);
			/*res.render('equipelist', { "equipelist": docs}) */

			res.end();
		});
});

/* GET New Equipe page. */
router.get('/newequipe', function(req, res){
	res.render('newequipe', { title: 'Add new equipe'});


});

/* POST postEquipe. */
router.post('/addequipe', function(req, res){
	var db = require("../db");
	var equipeName = req.body.equipe;
	var pokémonName = req.body.pokémon;

	var Equipes = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
	var equipe = new Equipes({ equipe: equipeName, pokémon: pokémonName});
	equipe.save(function(err){
		if(err){
			console.log("Error! " + err.message);
			return err;
		}
		else{
			res.json(newequipe);
			console.log("POST SAVED");
			print("POST SAVED");
			res.end();

		}
	});
});



/* GET UMA equipe */
/*
router.get('/equipe/:id', function(req, res, next){
	var db = require('../db');
	var Equipe = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
	Equipe.find({ _id: req.params.id }).lean().exec(function(e, docs){
		res.json(docs);
		res.end();
		/*res.render('equipelist', { "equipelist": docs}) */

/*
	});
});



/*POST UMA equipe */
/*
router.post('/equipes/', function(req, res, next){
	var db = require('../db');
	var Equipe = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
	var newequipe = new Equipe({ equipe: req.body.equipeName, pokémon: req.body.pokémonName });
	equipe.save(function(err){
		if(err){
			res.status(500).json({ error: err.message});
			res.end();
			return;
		}
		else{
			res.json(newequipe);
			console.log("POST SAVED 2");
			print("POST SAVED 2");
			res.end();
		}
		
		});
	});

/* PUT UMA equipe. */
/*
router.put('/equipes/:id', function(req, res, next){
	var db = require('../db');
	var Equipe = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
	Equipe.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: true}, function(err, doc){
		if(err){
			res.status(500).json({ error: err.message});
			res.end();
			return;
		}
		res.json(req.body);
		res.end();
	});
});

/* DELETE UMA equipe. */
/*
router.delete('/equipes/:id', function(req, res, next){
	var db = require('../db');
	var Equipe = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
	Equipe.find({ _id: req.params.id }).remove(function(err){
		if(err){
			res.status(500).json({ error: err.message });
			res.end();
			return;
		}
		res.json({success: true});
		res.end();
	});
});
*/



module.exports = router;
