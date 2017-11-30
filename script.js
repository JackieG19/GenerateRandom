//Generate Random Fractions with JavaScript

function randomFraction() {

  return Math.random(0);
}

0.1707424648792517

<----------------------------------------------->

// Generate Random Whole Numbers with JavaScript

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  return Math.floor(Math.random() * 10);
}

2

<--------------------------------------------------->

//Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line

}

var myRandom = randomRange(5, 15);

myRandom = 13