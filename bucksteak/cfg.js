//Config!
module.exports = function(){
      switch(process.env.NODE_ENV){
		        case 'development':
				   mongoose.connect('mongodb://localhost:27017/NODEGREEN_DB');
  				case 'production':
				   mongoose.connect('mongodb://localhost:27017/NODEBLUE_DB');
				default:
				   return("you suck");
	  }
};
