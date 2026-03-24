// ARRAY METHODS - I
// const sample = [10, 20, 30, 40, 50, 60];
// console.log(sample);
/* programming count
    index - always starting from 0 
    length - it count the total number of element
*/

// push()
// realtime example - youtube videos watchlist
let watchlist = ["JavaScript Tutorial", "HTML Tutorial"];
watchlist.push("Backend Tutorial");
console.log("push method", watchlist);

// pop()
watchlist.pop();
console.log("pop method", watchlist);

// shift()
// realtime example - ticket line
let ticketLine = ["person1", "person2", "person3", "person4"];
ticketLine.shift();
console.log("shift method", ticketLine);

// unshift()
// realtime example - medical line
let appointment = ["general-checkup1", "general-checkup2"];
appointment.unshift("emergency-checkup");
console.log("unshift method", appointment);

//slice()
// realtime example - Instagram trends
let instagramTrends = ["AI", "IPL", "War", "Stocks", "Medical", "Politics"];
let filteredTrends = instagramTrends.slice(0, 4);
console.log("slice method", filteredTrends);

// splice()
// dynamic function - adding/remove/update

// update
let cart = ["Laptop", "Mouse", "Keybrd", "Monitor"];
cart.splice(2, 1, "Keyboard");
console.log("splice - update()", cart);

// add
cart.splice(3, 0, "Table", "Speaker");
console.log("splice- add()", cart);

// remove
cart.splice(3, 1);
console.log('splice - remove()', cart);

cart.splice(2, 2);
console.log("splice - remove()", cart);

cart.splice(0, 1);
console.log(cart);

// String Methods

// toLowerCase()
let emailInput = "NARASIMHAN@GMAIL.COM";
let formattedMail = emailInput.toLowerCase();
console.log("lowerCase()",formattedMail);

// toUpperCase()
let panCard = "abefr7645f";
let formattedPan = panCard.toUpperCase();
console.log("upperCase()", formattedPan);

// includes()
const shoppingcart = ['table', 'chair', 'fan'];
const output = shoppingcart.includes('chair');
console.log(output);

// split() - backend development
const mobileContacts = "person1, person2, person3";
// ["person1", "person2", "person3"];
const convertedValues = mobileContacts.split(",");
console.log(convertedValues);