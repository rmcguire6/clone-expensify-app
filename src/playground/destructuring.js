console.log('destructuring');

// const person = {
//   name: 'Andrew',
//   age: 43,
//   location: {
//     city: 'Philadelphia',
//     temp: 32
//   }
// }
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }
// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName)

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

console.log(`You are in ${address[1]}, ${address[2]}`)

//const [street, city, state, zip] = address;

// no zip
//const [street, city, state] = address;
// just city and state
const [, city, state = 'New York'] = address;
// just state
//const [, , state] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
console.log(`A medium ${item[0]} costs ${item[2]}.`);
const [name, , medium] = item;
console.log(`A medium ${name} costs ${medium}`);

