var messages = require('./messages_pb');

var customer = new messages.Customer();

customer.setUsername('monty');
customer.setEmailAddressesList('abc@gmail.com');
customer.setType(messages.Customer.Type.MEMBER);

var address = new messages.Customer.Address();
address.setAddress("Xyz");
address.setCity("Hyd");
address.setState("TS");
address.setZipCode("500032");

customer.setAddress(address);

console.log(customer);
console.log(customer.toObject());
