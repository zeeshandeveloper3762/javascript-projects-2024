const form = document.querySelector("form");
let result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  if (height === "" || isNaN(height) || height < 0) {
    result.innerHTML = `Please give a Valid Height ${height}`;
  } else if (weight === "" || isNaN(weight) || weight < 0) {
    result.innerHTML = `Please give a Valid Weight ${weight}`;
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `BMI ${bmi}`;
  }
});
