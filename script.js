/* Declare variables below to save the different sections (divs) of your story*/

let optionOneButton =
  document.querySelector('.option-one')

let optionOneScreen =
  document.querySelector(".option-one-screen")

let storyOpening =
  document.querySelector(".story-opening")

let title =
  document.querySelector(".title")

let firstChoice =
  document.querySelector(".firstchoice")

let optionTwoButton = 
  document.querySelector('.option-two')

let optionTwoScreen =
  document.querySelector(".option-two-screen")

 /* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables! */
  
optionOneButton.onclick=function(){
  title.style.display = "none";
  firstChoice.style.display = "none";
  storyOpening.style.display = "none";
  optionOneScreen.style.display = "block";
};

optionTwoButton.onclick=function(){
optionTwoScreen.style.display = "block";
  title.style.display = "none";
  firstChoice.style.display = "none";
  storyOpening.style.display = "none";
};




