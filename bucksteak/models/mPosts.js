var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postsSchema = new Schema({	
  content: String,
  userID: Schema.ObjectId
});

mongoose.model('posts', postsSchema);
