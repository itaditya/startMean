// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
    name: { type: String, default: '' }
});
mongoose.connect('mongodb://itaditya:itaditya@ds053166.mlab.com:53166/dbaditya');