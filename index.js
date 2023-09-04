const buttons = document.querySelectorAll(".drum")

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    const buttonInnerHTML = this.innerHTML
    makeAudio(buttonInnerHTML)
    animatedButton(buttonInnerHTML)
  })
}

document.addEventListener("keypress", function(event) {
  makeAudio(event.key)
  animatedButton(event.key)
})

function makeAudio(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play()
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play()
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play()
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play()
      break;
    case "j":
      new Audio("sounds/snare.mp3").play()
      break;
    case "k":
      new Audio("sounds/crash.mp3").play()
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play()
      break;
    default:
      console.log("gak ada soundnya")
      break;
  }
}

function animatedButton(currentKey) {
  const buttonClassList = document.querySelector(`.${currentKey}`).classList
  buttonClassList.add("pressed")
  setTimeout(() => {
    buttonClassList.remove("pressed")
  }, 300)
}