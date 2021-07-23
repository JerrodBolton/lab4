// I want the ues to input their name and they will get a welcome form th website.
/*
function innames(){
let usernames = prompt("What is your name?");
 document.write(" Hey, welcome " + usernames + " happy for here you here!");
}*/
  "use strict";

function quiz() {
  // if the x don't put Jerrod Bolton then it's going to put you wrong.

  let name = true;

  while (name) {
    let response = prompt("What is my Jerrod Bolton?");
    if (response === "yes") {
      name = false;
      alert("Your Correct!!!!");
    } 
    else {
      alert("Your answer is incorrect");
    }
  }

  let school = true;

  while (school) {
    let response2 = prompt("Did I go to freedom Prep?");
    if (response2 === "yes") {
      school = false;
      alert("Your Correct!!!!");
    } 
    else {
      alert("Your answer is incorrect");
    }
  }

  let graduate = true;

  while (graduate) {
    let response3 = prompt("Did I graduate in 2017?");
    if (response3 === "no") {
      graduate = false;
      alert("Your Correct!!!!");
    } 
    else {
      alert("Your answer is incorrect");
    }
  }

  let college = true;

  while (college){
    let response5 = prompt(" Was college easy for me?");
    if (response5 === "no") {
      college = false;
      alert("Your Correct!!!!");
  
        }   
         else{
      alert("Your answer is incorrect");
    }
   } 
  

  let golds = true;

  while (golds) {
    let response4 = prompt("Is my gold to be a software engineer?");
    if (response4 === "yes") {
       golds = false;
      alert("Your Correct!!!!");
    }
     else {
      alert("Your answer is incorrect");
    }
  }
}

 
let magicnumber = "15";

alert (" You four chances to guess the correct number. 1-20");

  for(let x = 0 ; x < 4; x++){

    let guess = prompt("What is the magic number 1-20?");

    // guess is greatest the magicnumber

     if(guess > magicnumber ){
        
      alert("Your to high");
      
    }
     
    // guess is to low than magicnumber 

    if( guess < magicnumber){
      alert("Your to low");
    }

    // guess is so close
    if (guess === "14" ){
      alert("So close but wrong to low!!!");
    }
    if(guess === magicnumber){
      alert( "You got it");
    
      break;
    }
  }
  alert ("The correct answer is 15");
