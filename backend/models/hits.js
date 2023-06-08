const mongoose = require("mongoose");
const hitSchema = mongoose.Schema({
    links : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Link'
    },
    ip : {
        type : String
    },
    country : {
        type: String
    },
    state : {
        type: String
    },
    city : {
        type: String
    },
    browserName : {
        type: String
    },
    browserVersion : {
        type : String
    },
    osName : {
        type : String
    },
    osVersion : {
        type : String
    }
}, {
    timestamps : true
});

module.exports = mongoose.model("Hits", hitSchema);