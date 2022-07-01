const btnOne = document.querySelector(".oneMin");
const startBtn = document.querySelector(".start-btn");

btnOne.textContent = "60s";

startBtn.addEventListener("click", () => {
  setInterval(() => {
    let limit = 60;
    var second;
    limit--;
    console.log(limit);
    btnOne.textContent = second;
  }, 1000);
});
