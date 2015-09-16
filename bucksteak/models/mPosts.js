var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

mongoose.model('posts', postsSchema);
