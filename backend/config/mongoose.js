const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "ERROR CONNECTING TO MONGODB"));
db.once('open', function() {
    console.log("CONNECTED TO DATABASE : MONGODB");
})
module.exports = db;