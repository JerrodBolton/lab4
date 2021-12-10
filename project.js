// alert("I'm not ready for this at all")

// the first thing that I have to do is make a function that way when they hit the button

function main() {
  questionP();
}

function questionP() {
  //   while howYouFeel isn't X,Y,Z
  let doneQ = true;

  while (doneQ === true) {
    let x = "High";
    let y = "Medium";
    let z = "Low";
    let q = "quiz" || "quit";
    // I made a prompt that way I can see how they feel about coding so far.
    let howYouFeel = prompt(
      `How confidence level about doing code do you feel ${x}, ${y}, ${z}, or ${q} if you would like to quit the your journal entry.`
    ).toUpperCase();
    // this is just so I can see that it work of nnt
    // console.log(howYouFeel);
    if (howYouFeel === "Q") {
      doneQ = false;
      alert("Thanks!!! So much for your contribution");
    }
    // Good for here!!!
    else {
      if (howYouFeel === "HIGH" || howYouFeel === "H") {
        alert("I'm so happy you feel that way");
        function infoP() {
          let numberQ = prompt("How many Journal entries have you done");
          let nameInfo = prompt("What is your name?");
          let todayIS = prompt("What is today date?");
          const though = prompt(
            "But I would love to find out why you feel this way?"
          );
  
          // **********************************************************************************************************************************************************************************************************************************************
          const body = document.body;
          const li0 = document.createElement("li")
          const li1 = document.createElement("li");
          const li2 = document.createElement("li");
          const li3 = document.createElement("li");
          const li4 = document.createElement("li");
          // **********************************************************************************
          li1.textContent = "Number: " + numberQ;
          li2.textContent = "Name: " + nameInfo;
          li3.textContent = "Date: " + todayIS;
          li0.textContent = "The way you feel " + howYouFeel;
          li4.textContent = "Thoughts: " + though;
          // **********************************************************************************
          
          body.append(li1);
          body.append(li2);
          body.append(li3);
          body.append(li0);
          body.append(li4);
        
          

          
        }

        let jE = [infoP()];
        for (let k = 0; k < jE.length; k++) {}
      } else if (howYouFeel === "MEDIUM" || howYouFeel === "M") {
        // this is going to pop up and say something to the person who's do
        alert(
          "I hop you feel better and more confident about the code that you writer"
        );
        function infoP() {
          let numberQ = prompt("How many Journal entries have you done");
          console.log(numberQ);
          let nameInfo = prompt("What is your name?");
          let todayIS = prompt("What is today date?");
          const though = prompt(
            "But I would love to find out why you feel this way?"
          );
          // **********************************************************************************************************************************************************************************************************************************************
          const body = document.body;
          const li0 = document.createElement("li");
          const li1 = document.createElement("li");
          const li2 = document.createElement("li");
          const li3 = document.createElement("li");
          const li4 = document.createElement("li");
          // **********************************************************************************
          li1.textContent = "Number: " + numberQ;
          li2.textContent = "Name: " + nameInfo;
          li3.textContent = "Date: " + todayIS;
          li0.textContent = "The way you feel " + howYouFeel;
          li4.textContent = "Thoughts: " + though;
          // **********************************************************************************
          
          body.append(li1);
          body.append(li2);
          body.append(li3);
          body.append(li0);
          body.append(li4);
            

          let jE = [infoP()];
          for (let k = 0; k < jE.length; k++) {}
        }
      } else if (howYouFeel === "LOW" || howYouFeel === "L") {
        alert("I really really hop that you feel better about that");
        function infoP() {
          let numberQ = prompt("How many Journal entries have you done");
          let nameInfo = prompt("What is your name?");
          let todayIS = prompt("What is today date?");
          const though = prompt(
            "But I would love to find out why you feel this way?"
          );
          // **********************************************************************************************************************************************************************************************************************************************
          const body = document.body;
          const li0 = document.createElement("li")
          const li1 = document.createElement("li");
          const li2 = document.createElement("li");
          const li3 = document.createElement("li");
          const li4 = document.createElement("li");
          // **********************************************************************************
          li1.textContent = "Number: " + numberQ;
          li2.textContent = "Name: " + nameInfo;
          li3.textContent = "Date: " + todayIS;
          li0.textContent = "The way you feel " + howYouFeel;
          li4.textContent = "Thoughts: " + though;
          // **********************************************************************************
          
          body.append(li1)
          body.append(li2)
          body.append(li3)
          body.append(li0)
          body.append(li4)
        }
        let jE = [infoP()];
        for (let k = 0; k < jE.length; k++) {}
      }
    }
  }
}
