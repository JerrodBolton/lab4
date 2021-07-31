//I want the ues to input their name and they will get a welcome form th website.

function inNames() {
  let usernames = prompt("What is your name?");
  document.write(" Hey, welcome " + usernames + " happy for here you here!");
}

("use strict");
var totalScore = "0";

function question1() {
  let myName = true;
  while (myName) {
    let response = prompt("Is my name Jerrod Bolton?");
    if (response.toUpperCase() === "YES" || response.toUpperCase() === "Y") {
      myName = false;
      alert("Your Correct!!!!");
      console.log(response);
      totalScore++;
    } else {
      alert("Your answer is incorrect");
    }
  }
}
function question2() {
  let school = true;

  while (school) {
    let response2 = prompt("Did I go to freedom Prep?");
    if (response2.toUpperCase() === "YES" || response2.toUpperCase() === "Y") {
      school = false;
      alert("Your Correct!!!!");
      console.log(response2);
      totalScore++;
    } else {
      alert("Your answer is incorrect");
    }
  }
}
function question3() {
  let graduate = true;

  while (graduate) {
    let response3 = prompt("Did I graduate in 2017?");
    if (response3.toUpperCase() === "NO" || response3.toUpperCase() === "N") {
      graduate = false;
      alert("Your Correct!!!!");
      console.log(response3);
      totalScore++;
    } else {
      alert("Your answer is incorrect");
    }
  }
}
function question4() {
  let college = true;

  while (college) {
    let response5 = prompt(" Was college easy for me?");
    if (response5.toUpperCase() === "NO" || response5.toUpperCase() === "N") {
      college = false;
      alert("Your Correct!!!!");
      console.log(response5);
      totalScore++;
    } else {
      alert("Your answer is incorrect");
    }
  }
}

function question5() {
  let golds = true;

  while (golds) {
    let response4 = prompt("Is my gold to be a software engineer?");
    if (response4.toUpperCase() === "YES" || response4.toUpperCase() === "Y") {
      golds = false;
      alert("Your Correct!!!!");
      console.log(response4);
      totalScore++;
    } else {
      alert("Your answer is incorrect");
    }
  }
}
function question6() {
  let career = true;

  while (career) {
    let response8 = prompt("Am I working for a better career");
    if (response8.toUpperCase() === "YES" || response8.toUpperCase() === "Y") {
      career = false;
      alert("Your Correct!!!!");
      console.log(response8);
      totalScore--;
    } else {
      alert("Your answer is incorrect");
    }
  }
}

function sleepQuestion() {
  let sleepHours = ["5", "6", "7", "8", "12"];

  for (let j = 1; j <= 6; j++) {
    // if guessGame is incorrect 6 time than you will know what is the correct answer.
    let numberOfHS = prompt(
      "With the amount of work I do; how much sleep do you think that I get?"
    ); // this is where I ask the question.

    let correctAnswer = false;
    for (i = 0; i < sleepHours.length; i++) {
      if (numberOfHS === sleepHours[i]) {
        // If the user answer correctly, the first 'for' loop will run again
        totalScore++;
        alert("That's right! Guess again?");
        correctAnswer = true;

        break;
      }
    }
    if (correctAnswer === false) {
      alert("I'm not crazy");
      // this is when someone get the wrong answer.
    }
  }
  alert(
    "Thanks for playing! the correct answers were " + sleepHours + " Enjoy!!");
}
function Score() {
  alert("Score total is " + totalScore);
}

function quiz() {
  question1();
  question2();
  question4();
  question3();
  question5();
  question6();
  sleepQuestion();
  Score();
}

// function guessGameMagicNumber() {
//   let magicNumber = "15";

//   alert(" You four chances to guess the correct number. 1-20");

//   for (let x = 0; x < 4; x++) {
//     let guess = prompt("What is the magic number 1-20?");

//     // guess is greatest the magicNumber

//     if (guess > magicNumber) {
//       alert("Your to high");
//     }

//     // guess is to low than magicNumber

//     if (guess < magicNumber) {
//       alert("Your to low");
//     }

//     // guess is so close
//     if (guess === "14") {
//       alert("So close but wrong to low!!!");
//     }
//     if (guess === magicNumber) {
//       alert("You got it");

//       break;
//     }
//   }
//   alert("The correct answer is 15");
// }

// guessGameMagicNumber();
