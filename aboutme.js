// I want the ues to input their name and they will get a welcome form th website.

function inNames(){
let usernames = prompt("What is your name?");
 document.write(" Hey, welcome " + usernames + " happy for here you here!");
}
  "use strict";

function quiz() {
  // if the x don't put Jerrod Bolton then it's going to put you wrong.

  let name = true;

  while (name) {
    let response = prompt(" Is my name Jerrod Bolton?");
    if (response.toUpperCase() === "YES" || response.toUpperCase() === "Y"){
      name = false;
      alert("Your Correct!!!!");
      console.log(response);
    } 
    else {
      alert("Your answer is incorrect");
    }
  }

  let school = true;

  while (school) {
    let response2 = prompt("Did I go to freedom Prep?");
    if (response2.toUpperCase() === "YES" || response2.toUpperCase() === "Y" ) {
      school = false;
      alert("Your Correct!!!!");
      console.log(response2);
     
    } 
    else {
      alert("Your answer is incorrect");
    }
  }

  let graduate = true;

  while (graduate) {
    let response3 = prompt("Did I graduate in 2017?");
    if (response3.toUpperCase() === "NO" || response3.toUpperCase() === "N") {
      graduate = false;
      alert("Your Correct!!!!");
      console.log(response3);

    } 
    else {
      alert("Your answer is incorrect");
    }
  }

  let college = true;

  while (college){
    let response5 = prompt(" Was college easy for me?");
    if (response5.toUpperCase() === "NO" || response5.toUpperCase() === "N" ) {
      college = false;
      alert("Your Correct!!!!");
      console.log(response5);
        }   
         else{
      alert("Your answer is incorrect");
    }
   } 
  

  let golds = true;

  while (golds) {
    let response4 = prompt("Is my gold to be a software engineer?");
    if (response4.toUpperCase() === "YES" || response4.toUpperCase() === "Y" ) {
       golds = false;
      alert("Your Correct!!!!");
      console.log(response4);
    }
     else {
      alert("Your answer is incorrect");

    }
  }
}

 function guessgamemagicNunber(){
let magicNumber = "15";

alert (" You four chances to guess the correct number. 1-20");

  for(let x = 0 ; x < 4; x++){

    let guess = prompt("What is the magic number 1-20?");

   // guess is greatest the magicNumber

    if(guess > magicNumber ){
        
       alert("Your to high");
      
    }
     
     // guess is to low than magicNumber 

     if( guess < magicNumber){
       alert("Your to low");
     }

     // guess is so close
     if (guess === "14" ){
       alert("So close but wrong to low!!!");
     }
     if(guess === magicNumber){
       alert( "You got it");
    
      break;
     }
   }
   alert ("The correct answer is 15");
 }
 guessgamemagicNunber();

// let guessGame = ["May","13","2000"]

//  saidAnswer= prompt("What is my birthday")
