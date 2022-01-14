const userInput = document.querySelector(".container-input")
const computedResult = document.getElementById("container-result")

userInput.addEventListener("keyup", function (ec) {
    if ( ec.keycode !== 48 && ec.keycode !== 49 && ec.keycode !== 13 && ec.keycode !== 8 ) 

    computedResult.innerText = parseInt(userInput.value, 2)
})