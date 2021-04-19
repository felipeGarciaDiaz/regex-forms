const regforms = require("./regex-forms.js");

console.log(
	"These should be true:\n",
  
  regforms.validator.title("This is an example of a title! $100.00"),
	regforms.validator.email("myemail@gmail.com"),
	regforms.validator.price("$50,000.00"),
	regforms.validator.tags("#test, #test2"),
	regforms.validator.phone("8139924795"),
	regforms.validator.description("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation")
);
console.log(
	"These should be false:\n",
  
  regforms.validator.title("no title"),
	regforms.validator.email("hey! this is not an email"),
	regforms.validator.price("thisisnotanumber"),
	regforms.validator.tags("nota#lol"),
	regforms.validator.phone("323.rwwa.35tate"),
	regforms.validator.description("tryme:)")
);
