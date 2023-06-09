const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Mohit:mohit123@cluster0.y9fklyw.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology : true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "ERROR CONNECTING TO MONGODB"));
db.once('open', function() {
    console.log("CONNECTED TO DATABASE : MONGODB");
})
module.exports = db;