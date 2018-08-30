import * as firebase from 'firebase';

//config not included because it contains the API key for real database config = {};


firebase.initializeApp(config);

const database = firebase.database();

//child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})
//child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})
//child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })
// database.ref('expenses/-LKc5nbD1tYiWwmAJp35').update({
//   'note': 'birthday'
// })
// database.ref('expenses/-LKc5nbD1tYiWwmAJp35').update({
//   'amount': '1019'
// })
const now = 567777;
database.ref('expenses').push({
  description: 'Cell phone bill',
  note: '',
  amount: '2500',
  createdAt: now
})

// database.ref('notes').push({
//   title: 'To Do',
//   body: 'Go for a run'
// })

// database.ref('notes').set(notes);
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   })
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// })

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500)
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000)
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500)
// database.ref().set({
//   name: 'Petra Bliss',
//   age: 42,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },

//   location: {
//     city: 'Indianapolis',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This save failed. ', e);
// });
// // update only updates from root 
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// }).then(() => {
//   console.log('Data is updated!');
// }).catch((e) => {
//   console.log('This update failed. ', e);
// });
// My version -- missed the $ syntax again! Also better to rename whole object 
// database.ref().on('value', (snapshot) => {
//   const job = snapshot.val().job
//   console.log(snapshot.val().name + ` is a ` + job.title + ` at ` + job.company)
// }, (e) => {
//   console.log('Error fetching data')
// })
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name}  is a ${val.job.title} at ${val.job.company}.`)
// }, (e) => {
//   console.log('Error fetching data')
// })
// database.ref().update({
//   'job/title': 'Software Team Lead',
//   'location/city': 'Portland, WA'
// })