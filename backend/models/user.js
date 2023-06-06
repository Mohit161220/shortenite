const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	username : {
		type: String,
		unique: true,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	imageName: {
		type: String,
		//required: true
	},
    links : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Link'
        }
    ],
    qrcode : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "QRCode"
        }
    ]
}, {
    timestamps : true
});

module.exports = mongoose.model("User", userSchema)