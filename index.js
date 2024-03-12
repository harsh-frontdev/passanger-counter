
let countEl = document.getElementById('count-el');
let prevEntry = document.getElementById('prevEntry');
let count = 0;

function increaseCounter() {
    count += 1;
    countEl.textContent = count
}

function save(){
    let countStr = count + ' - '
    prevEntry.textContent += countStr;
    count = 0;
    countEl.textContent = count
}