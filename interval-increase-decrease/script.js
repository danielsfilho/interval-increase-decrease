let counter = 0

let counterHTML = document.querySelector(".counter")

let btnLess = document.querySelector(".less")

let btnMore = document.querySelector(".more")

let increaseInterval

let decreaseInterval


btnLess.onclick = function() {
    clearInterval(increaseInterval)
    
    btnLess.classList.add("lessColor")
    btnMore.classList.remove("moreColor")
    decreaseInterval = setInterval(function() {
        counter--
        counterHTML.innerText = counter
    }, 100)

}


btnMore.onclick = function(evento) {
    clearInterval(decreaseInterval)


    btnMore.classList.add("moreColor")
    btnLess.classList.remove("lessColor")

    increaseInterval = setInterval(function() {
        counter++
        counterHTML.innerText = counter
    }, 100)
}



