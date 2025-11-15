let start = new Date().getTime(); //initialize the start time

// to get the colors in random
function colors() {
  var s = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color += s[Math.floor(Math.random() * 16)];
  }
  return color;
}

function moveBox() {
  var right = Math.random() * 300; //get the randome numebr to set the right position
  var top = Math.random() * 400 + 100; //get the random number to set the top position
  var width = Math.random() * 200 + 50; //get the random number to set the width
  var height = Math.random() * 200 + 50; //get the random number to set the height
  const box = document.getElementById("box");
  box.style.top = top + "px";
  box.style.right = right + "px";
  box.style.width = width + "px";
  box.style.height = height + "px";
  box.style.position = "absolute";
  box.style.backgroundColor = colors();
  start = new Date().getTime(); //reset the start time whenever box is moved
}
moveBox(); //initially move the box when the page loads
let lastbest = 0;
const box = document.getElementById("box"); //works when button is clicked
box.addEventListener("click", () => {
  let end = new Date().getTime(); //get the end time when box is clicked
  let speed = (end - start) / 1000;
  let speedText = document.getElementById("speed"); //get the element in which the speed in which is getting displayed
  speedText.innerHTML = "speed :" + speed;

  if (lastbest == 0) lastbest = speed; //checks if its the first time ,if yes set currecnt speed as best speed
  if (speed <= lastbest) {
    let b = document.getElementById("best");
    b.innerHTML = "Fastest" + speed;
    lastbest = speed;
  }
  moveBox(); //move the box to new position
});
