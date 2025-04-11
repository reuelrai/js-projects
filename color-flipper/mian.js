const colorList = ["green", "red", "blue", "yellow", "purple", "orange", "pink", "brown", "black", "white"];
const btn = document.querySelector(".btn");
const colorText = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colorList[randomNumber];
    colorText.textContent = colorList[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colorList.length);
}
