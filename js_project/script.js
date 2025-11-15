let start = new Date().getTime();
function colors() {
  var s = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color += s[Math.floor(Math.random() * 16)];
  }
  return color;
}

function moveBox() {
  var right = Math.random() * 300;
  var top = Math.random() * 400 + 100;
  var width = Math.random() * 200 + 50;
  var height = Math.random() * 200 + 50;
  const box = document.getElementById("box");
  box.style.top = top + "px";
  box.style.right = right + "px";
  box.style.width = width + "px";
  box.style.height = height + "px";
  box.style.position = "absolute";
  box.style.backgroundColor = colors();
  start = new Date().getTime();
}
moveBox();
let lastbest = 0;
const box = document.getElementById("box");
box.addEventListener("click", () => {
  let end = new Date().getTime();
  let speed = (end - start) / 1000;
  let speedText = document.getElementById("speed");
  speedText.innerHTML = "speed :" + speed;

  if (lastbest == 0) lastbest = speed;
  if (speed <= lastbest) {
    let b = document.getElementById("best");
    b.innerHTML = "Fastest" + speed;
    lastbest = speed;
  }
  moveBox();
});
