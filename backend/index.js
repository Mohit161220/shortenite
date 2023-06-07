const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

const port = 5000;
const app = express();

app.use(morgan("combined"));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use('/', require('./routes'));
app.get('/:id', require('./routes/index'));

app.listen(port, function(error){
    if(error) {
        console.log("Error in running server : " + error);
        return;
    }
    console.log(`Server is running on port : ${port}`);
});