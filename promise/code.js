console.log('program started!');

let myPromise = new Promise( (resolve, reject) => {
  setTimeout( () => { 
	resolve("I love You !!"); 
  }, 3000);
});



myPromise.then( (value) => {
  console.log(value);
});


console.log('program finished!');
