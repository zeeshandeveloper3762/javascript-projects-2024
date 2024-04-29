const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// console.log(buttons);

buttons.forEach((button) => {
  //   console.log(button);
  button.addEventListener("click", (e) => {
    // console.log(e);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
