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
    }
}, {
    timestamps : true
});

module.exports = mongoose.model("QRCode", qrSchema);