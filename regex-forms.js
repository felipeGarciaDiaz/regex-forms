//API FOR VALIDATION OF USEFUL FORMS

var validator = {
	title: function (data, max, min) {
		if (data.length <= max && data.length >= min) {
			return true;
			//any data between the range
		} else {
			return false;
		}
	},
	email: function (data) {
		if (/\S+@\S+\.\S+/.test(data)) {
			return true;
			//email@somewhere.com
		} else {
			return false;
		}
	},
	price: function (data) {
		if (/^\$?\d+(,\d{3})*(\.\d*)?$/.test(data)) {
			return true;
			//$50.00, $500, 50, 50.00
		} else {
			return false;
		}
	},
	description: function (data, max, min) {
		if (data.length <= max && data.length >= min) {
			return true;
			//any character in range
		} else {
			return false;
		}
	},
	phone: function (data) {
		if (/^[\+]?\d{2,}?[(]?\d{2,}[)]?[-\s\.]?\d{2,}?[-\s\.]?\d{2,}[-\s\.]?\d{0,9}$/im.test(data)) {
			return true;
			//000-000-0000, 0000000000, 000.000.0000, 000 000 0000, etc
		} else {
			return false;
		}
	},
	tags: function (data) {
		if (/(^|\s)(#[a-z\d-]+)/.test(data)) {
			return true;
			//#hashtag
		} else {
			return false;
		}
	},
};

module.exports = {
	validator,
};
