let days = document.querySelectorAll(".timer_value")[0]
let hours = document.querySelectorAll(".timer_value")[1]
let minutes = document.querySelectorAll(".timer_value")[2]

let deadlineDate = new Date(2024, 1, 2, 23, 59, 59)

function countDown() {
    let newDate = new Date()
    let resultDate = deadlineDate - newDate
    if (resultDate < 0) {
        clearInterval(timer); 
    } else {
        let daysValue = Math.floor(resultDate / (24 * 60 * 60 * 1000))
        let hoursValue = Math.floor((resultDate % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
        let minutesValue = Math.floor((resultDate % (60 * 60 * 1000)) / (60 * 1000))
        hold(daysValue, days)
        hold(minutesValue, minutes)
        hold(hoursValue, hours)
        
    }
}

let timer = setInterval(countDown, 1000)

countDown()

function hold(elem, value) {
    if (elem < 10) {
        value.textContent = `0${elem}`;
    } else {
        value.textContent = elem;
    }
}

