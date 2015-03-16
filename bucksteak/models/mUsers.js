var mongoose = require('mongoose');
Schema = mongoose.Schema;


var usersSchema = new Schema({
	
  content: String

});

mongoose.model('users', usersSchema);
