let days = document.querySelector(".events .days");
let hours = document.querySelector(".events .hours");
let minutes = document.querySelector(".events .minutes");
let seconds = document.querySelector(".events .seconds");
let contDownDate = new Date("Dec 30, 2021 23:59:59").getTime();
let timeDown = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = contDownDate - dateNow;
    let dayTime = Math.floor(dateDiff/(1000 * 60 * 60 * 24));
    days.innerHTML = dayTime < 10 ? `0${dayTime}` : dayTime;
    let hourTime = Math.floor((dateDiff % (1000 * 60 * 60 * 24))/(1000*60*60));
    hours.innerHTML = hourTime < 10 ? `0${hourTime}` : hourTime;
    let munitesTime = Math.floor((dateDiff % (1000 * 60 * 60 ))/(1000*60));
    minutes.innerHTML = munitesTime < 10 ? `0${munitesTime}`: munitesTime;
    let secondsTime = Math.floor((dateDiff % (1000 * 60 ))/(1000));
    seconds.innerHTML = secondsTime < 10? `0${secondsTime}` : secondsTime;

    if (dateDiff = 0) {
        clearInterval(timeDown);
        let goodBay = document.querySelector(".text span");
        goodBay.textContent = "مبرووووووووووك";
    }
},1000)
