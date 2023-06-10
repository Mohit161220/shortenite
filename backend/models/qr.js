const mongoose = require("mongoose");
const qrSchema = mongoose.Schema({
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
    link : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Link'
    }
}, {
    timestamps : true
});

module.exports = mongoose.model("QRCode", qrSchema);