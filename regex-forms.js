//API FOR VALIDATION OF USEFUL FORMS

var validator = {
	
	title: (data) => data.length <= 100 && data.length >= 10,
	//anything in range
	
	email: (data) => /\S+@\S+\.\S+/.test(data),
	//email@somewhere.com
	
	price: (data) => /^\$?\d+(,\d{3})*(\.\d*)?$/.test(data),
	//$50.00, $500, 50, 50.00
	
	description: (data) => data.length <= 1500 && data.length >= 100,
	//anything in range
	
	phone: (data) => /^[\+]?\d{2,}?[(]?\d{2,}[)]?[-\s\.]?\d{2,}?[-\s\.]?\d{2,}[-\s\.]?\d{0,9}$/im.test(data),
	//000.000.0000 0000000000 000 000 0000 000-000-0000 (000)-000-0000 etc
	
	tags: (data) => /(^|\s)(#[a-z\d-]+)/.test(data),
	//#hashtag
};

module.exports = {
	validator,
};
