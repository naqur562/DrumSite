var tom1 = new Audio("sounds/tom-1.mp3")
var tom2 = new Audio("sounds/tom-2.mp3")
var tom3 = new Audio("sounds/tom-3.mp3")
var tom4 = new Audio("sounds/tom-4.mp3")
var snare = new Audio("sounds/snare.mp3")
var crash = new Audio("sounds/crash.mp3")
var kick = new Audio("sounds/kick-bass.mp3")

var drums = document.querySelectorAll(".drum").length

for (var x = 0 ; x < drums ; x++) {

    document.querySelectorAll(".drum")[x].addEventListener("click", function() {
       drumMachine(this.innerHTML)
       buttonAnimation(this.innerHTML)
    })

}

document.addEventListener("keydown", function(event) {
    drumMachine(event.key)
    buttonAnimation(event.key)
})

function drumMachine(key){

    if(key == "w") {
        tom1.play()
    } else if (key == "a") {
        tom2.play()
    } else if (key == "s") {
        tom3.play()
    } else if (key == "d") {
        tom4.play()
    } else if (key == "j") {
        snare.play()
    } else if (key == "k") {
        crash.play()
    } else if (key == "l") {
        kick.play()
    }

}

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key)
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100 )
}