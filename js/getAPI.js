// get date ===========================

const date = new Date();
const today = date.getDate();
const monthName = date.getMonth();
console.log(monthName, today);

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