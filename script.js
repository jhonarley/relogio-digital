const hoursElemnt = document.getElementById("hours")
const minutesElemnt = document.getElementById("minutes")
const secundsElemnt = document.getElementById("secunds")
const dateElement = document.getElementById("date1")

function newTime(){

    const date = new Date();

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const secunds = date.getSeconds()
    const date1 = date.getDate()

    hoursElemnt.textContent = fixTime(hours)
    minutesElemnt.textContent = fixTime(minutes)
    secundsElemnt.textContent = fixTime(secunds)
    dateElement.textContent = fixTime(date)
}

function fixTime(time){
    return time < 10 ? "0" +time : time
}
newTime()    
setInterval(newTime, 1000)