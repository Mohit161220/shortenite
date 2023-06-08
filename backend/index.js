const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const session = require('express-session');
const fetch = require('node-fetch');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const port = 5000;
const app = express();

app.use(cors());
// app.use(morgan("combined"));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(session({
    name : 'shortenite',
    secret : 'shortenite',
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : 1000 * 60 * 60 * 24
    },
    store : MongoStore.create({
        mongoUrl : 'mongodb://localhost:27017/shortenite',
        autoRemove : 'disabled'
    }, function(error){
        if(error) console.log('Error in MongoStore : ' + error);
        else console.log('Connect Mongo Set-up Ok');
    })
}));

app.use(passport.initialize());
app.use(passport.session());
// app.use(passportLocal.setAuthenticatedUser);
app.set('trust proxy', true);
app.use('/', require('./routes'));
app.get('/:id', require('./routes/index'));

app.listen(port, function(error){
    if(error) {
        console.log("Error in running server : " + error);
        return;
    }
    console.log(`Server is running on port : ${port}`);
});