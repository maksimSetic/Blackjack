let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [];
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");


let player = {
   name: "Maksim",
   chips: 145
}



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function rollDice() {
  let randomNumber = Math.floor( Math.random() * 6 ) + 1
  return randomNumber;
  }

function getRandomCard(){
  let randomCard = Math.floor( Math.random() * 13 ) + 1

  if (randomCard > 10) {
    return 10 }
 else if (randomCard === 1) {
    return 11
 } else {
   return randomCard
  }

 }
  

function startGame() {
  isAlive = true;
let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard, secondCard]
sum = firstCard + secondCard
  renderGame();
 
  
}

function renderGame() {
  cardsEl.textContent = "Cards: " 

  for (let i = 0; i <= cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if(isAlive === true && hasBlackJack === false) {
  let card = getRandomCard();
  sum += card;
  renderGame();
  console.log("Drawing a new card from the deck!");
  }
}

//IF/ELSE EXTRA TRAINING

/*let age = 22
if (age <= 21) {
    console.log("You cannot enter the club.")
} else {
    console.log("Welcome!")
} */

/*let age = 100
if (age < 100){
    console.log("You are not eligible")
} else if (age === 100) {
    console.log("Happy birthday, here is your card from the King!")
} else if (age > 100) {
    console.log("You've already got one, not eligible!")
} */


//ARRAY EXTRA TRAINING - Do apply yourself

 /*   let featuredPosts = [
  "Check out my Netflix clone",
  "Here's the code for my project",
  "I've just relaunched my portfolio",
];
console.log(featuredPosts[1])

let experience =["Front end dev intern", "Junior front end web dev", "Medior web dev"]

let myStats = ["Maksim", 23, true]

let messages = ["hi", "hows it going", "whats up"]
let newMessage = "sup"



messages.push(newMessage)
messages.pop */

//LOOPS EXTRA TRAINING!

        //START       FINISH      STEP SIZE
    /* for ( let count0 = 1; count0 < 11; count0 += 2) {

    console.log(count0)
}

for ( let count1 = 10; count1 <= 100; count1 += 10) {

    console.log(count1)
} 

let sentence = ["Hello", "my", "name", "is", "Per"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i] + " "
} */

//RETURNING VALUES AS FUNCTIONS TRAINING 

/*let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time
  } else if (player2Time < player1Time) {
    return player2Time
  } else {
    return player1Time
  }
}
let fastestRace = getFastestRaceTime()

function totalRaceTime(){
  return player1Time + player2time 
}
let totalRace = totalRaceTime();
console.log(totalRace); */

//LOGICAL OPERATOR EXTRA TRAINING 
 
/*let likesDocumentaries = true;
let likesStartups = false;

function reccomendMovie() {
  console.log("Hey, check out this new movie we think you'll like!")
}
function checkMovie() {
  if (likesDocumentaries === true || likesStartups === true ){
    reccomendMovie();
  }
} */

//OBJECTS EXTRA TRAINING - Concentration
/* let airBnb = {
  name: "Castle Neuschwanstein",
  age: 779,
  rulers: [ "Henry", 4,  "Vlad", "Impala" ],
  isVacatable: false
}

console.log(airBnb.rulers)
console.log(airBnb.name)  */

// I. OBJECTS AND FUNCTIONS EXTRA TRAINING - Its only hard if you make it, split it up and focus 
 
/* let person = {
  name: "Maksim",
  age: 23,
  country: "Croatia"
}

function logData() {
  console.log(person.name + " is " + person.age + " years old, and lives in " + person.country)
}
logData(); */

//II.

/*let age = 52

function  busDiscount() {
  if (age < 6) {
    console.log("Free ride")
  } else if ( age > 5 && age < 18) {
    console.log("Child discount, 60% off")
  }
   else if ( age > 17 && age < 27 ) {
    console.log("Student discount")

  } else if ( age > 26 && age < 67 ){
    console.log("Full price")
    
  } else if ( age > 66) {
    console.log("Senior citizen discount")
  }
} 

busDiscount(); */

//III.

/* let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

for (i = 0; i <= largeCountries.length; i++){
  return "Top 5 largest countries in the world: " + largeCountries[i]
}

//IV.

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

function reassignCountries() {
  largeCountries.shift();
  largeCountries.unshift("China");
  largeCountries.pop();
  largeCountries.push("Pakistan");
}
reassignCountries(); */

//V. 

let dayOfMonth = 13
let weekday = "Friday"

if (dayOfMonth === 13 && weekday === "Friday") {
  console.log("😀")
}

//VI.

let hands = ["rock", "paper", "scissor"]

function rPS(){
  let randomIndex = Math.floor( Math.random() * 3) 
  return hands[randomIndex] 
}

//VII.

let fruit = ["Apple", "Orange", "Apple", "Apple", "Orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit() {
  for (i = 0; i < fruit.length; i++){
    if (fruit[i] === "Apple") {
      appleShelf.textContent += "Apple"
    }  else if (fruit[i] === "Orange") {
      orangeShelf.textContent += "Orange"
  } 

  } sortFruit();
} 
//VIII.
