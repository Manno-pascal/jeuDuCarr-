let board = document.querySelector("#board")
let score = 0;
let cells = []
let scoreText = document.querySelector("#finalScore")
let pannel = document.querySelector("#pannel")
let refresh = document.querySelector("#refresh")
let firstColor = ""
let secondColor = ""

function play() {
    board.setAttribute("style", "display:flex;")
    pannel.style.display = 'none'
    let time = document.querySelector("#time").value
    let difficulty = document.querySelector("#difficulty").value

    for (let i = 0; i < difficulty; i++) {

        let square = document.createElement("div")
        square.classList.add('square')
        square.setAttribute("onclick", "clickOnSquare(this)")
        board.appendChild(square)
        cells = document.querySelectorAll(".square")

    }
    setTimeout(end, (time * 1000))
    round()

}

function round() {
firstColor = randomColor()
secondColor = randomColor()
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = firstColor
    }
    let randomCell = randomNumber(0, (cells.length - 1))
    cells[randomCell].style.backgroundColor = secondColor
    secondColor = cells[randomCell].style.backgroundColor
}

function clickOnSquare(elem) {
    if (elem.style.backgroundColor ==  secondColor) {
        score++
        scoreText.innerText = `Le score est de : ${score}`
    }
    round()
}

function end() {
    refresh.style.display = 'block'
    board.style.display = 'none'


}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor(){
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color +=randomNumber(0,9)
        
    }
    return color
}