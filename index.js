btn_length = document.querySelectorAll("button").length;
for (let i = 0; i < btn_length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonpress = this.innerHTML;
        makeSound(buttonpress)
    })
}
function makeSound(key) {
    var audio = new Audio("./sounds/"+key+".mp3");
    audio.play();
}

// detecting keyboard key
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
})