const { faker } = require("@faker-js/faker");

const company = faker.company.buzzPhrase();
const catchphrase = faker.company.catchPhrase();
const avatar = faker.image.avatar();

console.log("Company:", company);
console.log("Catchphrase:", catchphrase);
console.log("Avatar:", avatar);
