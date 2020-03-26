
function startTime() {
    let today = new Date();

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
        h + ":" + m + ":" + s;
    console.log(h)
    if (h >= 7 && h <= 11) {
        document.body.style.backgroundColor = '#fae2a4';
        document.getElementById('message').innerHTML = 'Goedemorgen';
    }
    else if (h >= 12 && h <= 18) {
        document.body.style.backgroundColor = '#ffbb5f';
        document.getElementById('message').innerHTML = 'Goedemiddag';
    }
    else {
        document.body.style.backgroundColor = '#ff964a';
        document.getElementById('message').innerHTML = 'Goedeavond';
    }
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

startTime();