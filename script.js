const numberOfButtons = document
  .getElementById("btns")
  .getElementsByClassName("rating-btn").length;

const buttons = document
  .getElementById("btns")
  .getElementsByClassName("rating-btn");

const submitRatingBtn = document.getElementById("submit-btn");

const ratingNumberSpan = document.getElementById("rating-number");

for (var i = 0; i < numberOfButtons; i++) {
  buttons[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    ratingNumberSpan.textContent = getRatingNumber();
  });
}

function getRatingNumber() {
  const ratingNumber = document.getElementsByClassName("active")[0].innerHTML;
  return ratingNumber;
}

submitRatingBtn.addEventListener("click", function () {
  while (ratingNumberSpan.textContent === "") {
    alert("I'm sorry, you can't submit without giving us a rating.");
    return;
  }
  document.getElementById("rating-card").classList.add("hidden");
  document.getElementById("feedback-card").classList.remove("hidden");
  console.log(ratingNumberSpan.textContent);
});
