import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyDGTmFwbi6pcV2XGZCtgu-GiqsztVVTunI",
    authDomain: "expensifyapp-deva.firebaseapp.com",
    databaseURL: "https://expensifyapp-deva.firebaseio.com",
    projectId: "expensifyapp-deva",
    storageBucket: "expensifyapp-deva.appspot.com",
    messagingSenderId: "768877500193"
  };
  firebase.initializeApp(config);

const database = firebase.database();

database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
})




 database.ref('location/city')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log('Error fetching data', e);
  });
  

  database.ref().set(
      {
    name: 'Deva venkat',
    age: 26,
    isSingle: false,
    location: {
      city: 'Philadelphia',
      country: 'United States'
    }
  }).then(() => {
    console.log('Data is saved!');
  }).catch((e) => {
    console.log('This failed.', e);
  });
  
//   database.ref().set('This is my data.');
  
  database.ref('age').set(27);
  database.ref('location/city').set('New York');
  
  database.ref('attributes').set({
    height: 73,
    weight: 150
  }).then(() => {
    console.log('Second set call worked.');
  }).catch((e) => {
    console.log('Things didnt for the second error', e);
  });

  database.ref().update({
    stressLevel: 9,
    'job/title': 'Software Developer',
    'location/city': 'Seattle',
    isSingle:null
  }).then(() => {
    console.log('Data was updated');
  }).catch((e) => {
    console.log('Did not update data', e);
  });;
  


  database.ref('isSingle')
  .remove()
  .then(() => {
    console.log('Data was removed');
  }).catch((e) => {
    console.log('Did not remove data', e);
  });



 


  