var button = document.querySelector("#buttons");
var cardText = document.querySelector("#text");
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var footer = document.querySelector("#footer");
var Arr = 0;
var score = 0;
var secondsLeft = 0;
// var bId = event.srcElement.id;
// var bId = "";
var ans = "";


// var textArr = ["Start", "Question 1", "Save"];
// var btnArr = ["Welcome to my Quiz", "How much does it cost", "Why did you choose that"];
var btnArr = [
  {
    q:"What is Java Script?",
    a: "Coffee", 
    b: "A web programing language",
    c: "A font face",
    d: "All of the above",
    ans: "b"
  },                
  {
    q: "What does a Java Script loop do?",
    a: "loops through a block of code", 
    b: "loops through websites",
    c: "changes the look and feel of a site",
    d: "None of the above",
    ans: "a"
  },
  {
    q: "What is an if statement?",
    a: "a statement that has if in it",
    b: "executes a block of code",
    c: "executes a function",
    d: "All of the above",
    ans: "d"
  },
  {
    q: "What does the script tag do?",
    a: "defines a client-side script",
    b: "define an html element",
    c: "define a css element",
    d:  "causes an html error",
    ans: "a"
  }
]

// start button
// ===================================================
function start(){
  var h5 = document.createElement ("h5");
  h5.textContent = "Weclome to my Java Script Quiz! When you hit start you will be given 30 seconds to complete this show 4 questions Quiz."
  text.appendChild(h5);
  buttons.innerHTML = "";
  var btn = "Start";
  var bId = "s";
  var li = document.createElement("li");
  li.textContent = btn;
  li.setAttribute("class", "btn");
  li.setAttribute("type", "button");
  li.setAttribute("id", "s");
  buttons.appendChild(li);
 
 }
button.addEventListener("click", function(event) {
  event.preventDefault();
  // crazy code visual editor suggested
  const newLocal = event.srcElement.id;
  var bId = newLocal;
  console.log(bId);
  firstQ();
  setTime();
})

// setTime();  // time in seconds  // timer
// ===================================================
// var secondsLeft = 10;

function setTime() {
  var secondsLeft = 30;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time remaining " + secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

// // onClick check answer and increment score/decrement time & go to next question.
// // ===================================================
function firstQ() {
    var bId = event.srcElement.id;
    var Arr = 0;
    console.log("checkAns"+ bId);
    var ans = btnArr[Arr].ans;
    console.log(ans);
    if (bId = "s"){
      Arr++;
      console.log("ans=s");
      console.log(Arr + "Arr Value");
      renderCardText();

    };
    button.addEventListener("click", function(event) {
      event.preventDefault();
      // crazy code visual editor suggested
      const newLocal = event.srcElement.id;
      var bId = newLocal;
      console.log(bId);
  })
}

    function checkAns() {
      var ans;
    if (ans === bId){
        score++;
        footer.textContent = "Correct! Your Score is " + score;
        console.log("score " +score);
    };
    
    if (ans !== bId && bId !== "s") {
        footer.textContent = "Sorry Incorrect! You will loose 3 Seconds and Your Score is " + score;
        var subTime = (secondsLeft - 3);
        secondsLeft = subTime;
        console.log("seconds left" + secondsLeft);
    } 
        Arr++;
        renderCardText();
        setTime();
        console.log("Arr = " + Arr);
        console.log("choice " + bId)
        console.log("correct Answer " + ans)
        document.body.innerHTML = "";
        renderCardText();
};

// // Create text for HTML CardBody H5
// // ===================================================
  function renderCardText() { 
      // text.innerHTML = "";
      var h5 = document.createElement ("h5");
      h5.textContent = btnArr[Arr].q;
      text.appendChild(h5);
      buttons.innerHTML = "";
      //   add Button 1
      var btn = btnArr[Arr].a;
      var li = document.createElement("li");
      li.textContent = btn;
      li.setAttribute("type", "button");
      li.setAttribute("id", "a");
      buttons.appendChild(li);
      //   add Button 2
      var btn = btnArr[Arr].b;
      var li = document.createElement("li");
      li.textContent = btn;
      li.setAttribute("type", "button");
      li.setAttribute("id", "b");
      buttons.appendChild(li);
      //   add Button 3
      var btn = btnArr[Arr].c;
      var li = document.createElement("li");
      li.textContent = btn;
      li.setAttribute("type", "button");
      li.setAttribute("id", "c");
      buttons.appendChild(li);
          //   add Button 4
      var btn = btnArr[Arr].d;
      var li = document.createElement("li");
      li.textContent = btn;
      li.setAttribute("type", "button");
      li.setAttribute("id", "d");
      buttons.appendChild(li);

    }
  // }


function sendMessage() {
  timeEl.textContent = " ";
  timeEl.textContent = "Time is Up!"
    alert("you are out of time");
    renderCardText();
  }

// call timer - uncomment to run when page is loaded.

// Score page - collect score and intails.
// ===================================================
function renderScore(){
  var h5 = document.createElement ("h5");
  h5.textContent = "You got " + score + " correct!"
  text.appendChild(h5);
//  needs to be a text box with save button
  li.textContent = btn;
  li.setAttribute("type", "button");
  li.setAttribute("id", "s");
  buttons.appendChild(li);
}

start();
// }

// Working code
// renderCardText();

// function renderCardText() {
//   for (var j=0; j < btnArr.length; j++) {
//     // console.log(btnArr[j]);
//     var quest = JSON.stringify.btnArr;
//     var h5 = document.createElement ("h5");
//     h5.textContent = btnArr[j].a + "test";
//     text.appendChild(h5);
// }
// }
// console.log(btnArr[1].a)


// Create buttons for HTML
// ===================================================
// renderCardButtons();

// function renderCardButtons() {
// // Clear CardBody element
// buttons.innerHTML = "";
// // todoCountSpan.textContent = todos.length;
// //new li for each Text
// for (var i = 0; i < textArr.length; i++) {
//   var btn = textArr[i];

//   var li = document.createElement("li");
//   li.textContent = btn;
//   li.setAttribute("type", "button");
//   buttons.appendChild(li);
