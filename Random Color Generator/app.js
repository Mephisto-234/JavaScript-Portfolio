const colors = ["green", "red", "blue"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener('click', function(){
    // goal >> get random number 0-3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}