// 랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
// 만약 유저가 랜덤번호를 맞추면, 맞혔습니다!
// 랜덤번호<유저번호 Down
// 랜덤번호>유저번호 Up
// Reset 버튼을 누르면 게임 리셋
// 5번의 기회를 다 쓰면 게임 끝(게임 진행 불가, go 버튼 비활성화)
// 유저가 1-100 범위 밖의 숫자를 입력하면 알림, 기회소모X
// 유저가 입력한 숫자를 재입력하면 알림, 기회소모X

let comNumber = 0
let playButton = document.getElementById("play-button")
let resetButton = document.getElementById("reset-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let chanceArea = document.getElementById("chance-area")
let mainImage= document.getElementById("main-image")

let chances = 5
let history = []

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function(){userInput.value=""})

function pickRanNum(){
    comNumber = Math.floor(Math.random()*100)+1
}
pickRanNum()

function play() {
    let userValue = userInput.value
    
    if(userValue<1 || userValue>100){
        resultArea.textContent = "1-100사이 숫자를 입력해 주세요"
        return
    }
    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력해 주세요"
        return
    }
    chances--
    chanceArea.textContent = `남은 기회 : ${chances}번`
    if(userValue<comNumber){
        resultArea.textContent = "UP!"
        mainImage.src="https://media0.giphy.com/media/d5Hgiq0neyKqWO62cj/200w.webp?cid=ecf05e470lhtevh0kskvobpyu68rf890nawgmi1w0ifrvptg&rid=200w.webp&ct=g"
    } else if(userValue>comNumber){
        resultArea.textContent = "Down!"
        mainImage.src="https://media2.giphy.com/media/dnOjbZhpwtr9IpWTbX/100.webp?cid=ecf05e47cgde8sqxs2me09vwv9c9emqinsvjq0emqcbkqbm8&rid=100.webp&ct=g"
    } else {
        resultArea.textContent = "정답!"
        mainImage.src="https://media0.giphy.com/media/3ov9jSmllAIKuthAe4/200w.webp?cid=ecf05e47wdqrjjrdn5pt12gbxkohmybe2uqtnhkgakto98b7&rid=200w.webp&ct=g"
        playButton.disabled = true
    }

    history.push(userValue)
    
    if(chances<1){
        playButton.disabled = true
    }
}
function reset(){
    // user input창이 깨끗하게 정리
    userInput.value = ""
    chances = 5
    // 새로운 번호 생성
    pickRanNum()
    resultArea.textContent = "죽기 싫다면 맞춰라"
    chanceArea.textContent = `남은 기회 : ${chances}번`
    playButton.disabled = false
    history = []
    mainImage.src="https://media2.giphy.com/media/6PopYBwOlKS8o/giphy.gif?cid=ecf05e477p845gif6g0b1ifiw8r8s7p4s4b5z4qfoime3ew1&rid=giphy.gif&ct=g"
}