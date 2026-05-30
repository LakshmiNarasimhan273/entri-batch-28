const EventEmitter = require("events");

// Scenario 1 - Chat Application (Group Chat) | Zoho, Google
const chatEvent = new EventEmitter();

chatEvent.on('newMessage', (user, message) => {
    console.log(`New Message from ${user}: ${message}`);
});

chatEvent.emit('newMessage', 'Narasimhan', 'Kindly join the session');
chatEvent.emit('newMessage', 'Sathish', 'Joining');
chatEvent.emit('newMessage', 'Narasimhan', 'Okay');

// Scenario 2 - Payment Gateway Logic (RazorPay, BHIM, PayPal, Paytm)
const paymentEvent = new EventEmitter();

paymentEvent.once('processPayment', (amount) => {
    console.log(`Payment of ${amount}, Processed Successfully`);
});

console.log("User clicked the pay button");
paymentEvent.emit('processPayment', 5000);

console.log("User clicked the pay button again");
paymentEvent.emit('processPayment', 5000); // ignore