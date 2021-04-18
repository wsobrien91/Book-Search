const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoogleBookSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	authors: {
		type: [String],
	},
	description: {
		type: String,
	},
	image: {
		type: String,
	},
	link: {
		type: String,
	},
});

module.exports = mongoose.model('GoogleBook', GoogleBookSchema);