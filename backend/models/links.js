const mongoose = require("mongoose");
const linkSchema = mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }, 
    title: {
        type: String, 
        required: true
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    hitCount : {
        type: mongoose.Schema.Types.Number,
        default: 0
    },
    hits: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hits'
        }
    ]
}, {
    timestamps : true
});

module.exports = mongoose.model("Link", linkSchema)