const cat = document.getElementById("cat")
const rock = document.getElementById("rock")

function jump() {
    if (cat.classList != "jump") {
        cat.classList.add("jump")

        setTimeout(function(){
        cat.classList.remove("jump")
        },300)
    }
}

let isAlive = setInterval(function (){
    //get current cat Y position
    let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"))

    //get current rock X position
    let rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"))

    //detect collision
    if(rockLeft < 300 && rockLeft > 90 && catTop >= -110){
        //collision
        alert("Game Over!")
    }f

}, 10)

document.addEventListener("keydown", function (event) {
    jump()
})
