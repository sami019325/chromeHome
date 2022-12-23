// get date ===========================

const date = new Date();
const today = date.getDate();
const monthName = date.getMonth();
console.log(monthName, today);




// display time on input field =================
if (today === 24) {
    document.getElementById('next1').innerText = today + 2
    document.getElementById('next2').innerText = today + 3
    document.getElementById('next3').innerText = today + 4
    document.getElementById('next4').innerText = today + 5
    document.getElementById('next5').innerText = today + 6
    document.getElementById('next6').innerText = today + 7
}
else if (today === 25) {
    document.getElementById('next1').innerText = today + 2
    document.getElementById('next2').innerText = today + 3
    document.getElementById('next3').innerText = today + 4
    document.getElementById('next4').innerText = today + 5
    document.getElementById('next5').innerText = today + 6
}
else if (today === 26) {
    document.getElementById('next1').innerText = today + 2
    document.getElementById('next2').innerText = today + 3
    document.getElementById('next3').innerText = today + 4
    document.getElementById('next4').innerText = today + 5
}
else if (today === 27) {
    document.getElementById('next1').innerText = today + 2
    document.getElementById('next2').innerText = today + 3
    document.getElementById('next3').innerText = today + 4
}
else if (today === 28) {
    document.getElementById('next1').innerText = today + 2
    document.getElementById('next2').innerText = today + 3
}
else if (today === 29) {
    document.getElementById('next1').innerText = today + 2
}
else if (today > 29) {
    //
}

else {
    document.getElementById('next1').innerText = today + 2
    document.getElementById('next2').innerText = today + 3
    document.getElementById('next3').innerText = today + 4
    document.getElementById('next4').innerText = today + 5
    document.getElementById('next5').innerText = today + 6
    document.getElementById('next6').innerText = today + 7
    document.getElementById('next7').innerText = today + 8
}



// display time on home page =================

function display_ct5() {
    var x = new Date()
    var ampm = x.getHours() >= 12 ? ' PM' : ' AM';

    var dateToDisplay = x.getMonth() + 1 + "/ <span class='textLg'>" + x.getDate() + " </span>/" + x.getFullYear();
    timeToDisplay = " <span class='textLg'>" + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds() + "</span>" + ampm;
    document.getElementById('DisplayTime').innerHTML = timeToDisplay;
    document.getElementById('DisplayDate').innerHTML = dateToDisplay;

    display_c5();
}
function display_c5() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct5()', refresh)
}
display_c5()

// 86281ef773d25b350c381003e540e16f


fetch('https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=7ca7349094e983c7a3fc3899d3571a14&units=metric')
    .then(res => res.json)
    .then(data => console.log('API data', data))