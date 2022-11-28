let myPoints = 0;
let add3PointsBtn = document.getElementById("add3-points");
let remove1PointBtn = document.getElementById("remove1-point");
let currentPoints = document.getElementById("my-points");
let clearBtn = document.getElementById("clear");

currentPoints.textContent = myPoints;

function add3Points() {
  myPoints += 3;
  console.log(myPoints);
  currentPoints.textContent = myPoints;
}
add3PointsBtn.addEventListener("click", add3Points);

function remove1Point() {
  myPoints -= 1;
  console.log(myPoints);
  currentPoints.textContent = myPoints;
}
remove1PointBtn.addEventListener("click", remove1Point);

function clear() {
  myPoints = 0;
  console.log(myPoints);
  currentPoints.textContent = myPoints;
}
clearBtn.addEventListener("click", clear);