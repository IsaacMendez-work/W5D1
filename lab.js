// async function getRandomNumber() {
//     let timeConsumingActivity = new Promise((resolve) => {
//       setTimeout(() => resolve(Math.floor(Math.random() * 70)), 500)
//     });
//     let result = await timeConsumingActivity;
//     console.log(result);
//   }
// getRandomNumber();


// async function city(cityName) {
//     fetch(`https://geocode.xyz/${cityName}?json=1`)
//     .then(response => response.json())
//     .then(result => {
//         console.log(`The latitude is ${result.latt}`);
//         console.log(`The longitude is ${result.longt}`);
//     })
//     .catch(error => console.log('error', error));
//   }
// city('miami')


// async function showDog() {
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json()) 
//     .then(data => {
//       let pic = document.createElement('img');
//       pic.src = data.message;
//       document.body.append(img);
//     })
//     .catch(error => console.log('error', error));
//     }
// showDog()