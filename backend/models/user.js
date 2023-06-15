const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	username : {
		type: String,
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
		type: String
	},
	salt : {
		type : String,
		required: true
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