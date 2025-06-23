//Elementi
const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

//Reset
function resetDom() {
  counter.classList.add("show");
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");

  nums.forEach((num) => {
    num.classList.value = "";
  });
  nums[0].classList.add("in");
}

//Avvio animazione
function runAnimation() {
  nums.forEach((num, indx) => {
    const nextToLast = nums.length - 1;

    console.log(nextToLast);

    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && indx !== nextToLast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}
replay.addEventListener("click", () => {
  resetDom();
  runAnimation();
});
