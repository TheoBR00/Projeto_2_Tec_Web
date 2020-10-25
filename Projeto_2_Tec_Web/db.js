var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Projeto_2_Tec_Web');

var userSchema = new mongoose.Schema({
	equipe: String,
	pokémon: String	
}, { collection: 'usercollection' });

module.exports = { Mongoose: mongoose, UserSchema: userSchema }

