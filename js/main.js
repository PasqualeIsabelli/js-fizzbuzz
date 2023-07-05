const squareContainer = document.querySelector(".square-container");
const totalSquare = 10 * 10;

for (let i = 1; i <= totalSquare; i++) {
  let singleSquare = document.createElement("div");
  singleSquare.classList.add("fizz-square", "bg-primary", "fs-5", "fw-bold", "text-center", "lh-lg");
  singleSquare.innerHTML = i.toString();

  if (i % 3 === 0 && i % 5 === 0){
    singleSquare.classList.add("bg-danger");
    singleSquare.innerHTML = ("FizzBuzz");
  } else if (i % 3 === 0) {
    singleSquare.classList.add("bg-success");
    singleSquare.innerHTML = ("Fizz");
  } else if (i % 5 === 0) {
    singleSquare.classList.add("bg-warning");
    singleSquare.innerHTML = ("Buzz");
  }

  squareContainer.append(singleSquare);
}