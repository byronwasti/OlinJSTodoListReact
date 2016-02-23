var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/todo');
mongoose.connect('mongodb://dicks:cocks@ds015478.mongolab.com:15478/cocks');
var connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function(){
    console.log('Mongodb Connection Successful');
});
