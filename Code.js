//Week1-2 Countdown Timer Should run 10...1 then BLAST OFF
function StartCountdown() {
    var count = 10

    document.getElementById("CountdownTimer").innerHTML = count;
    count = count - 1;

    setTimeout(function () {
        //After 1 sec will run code in here
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);

    setTimeout(function () {
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);

    setTimeout(function () {
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);

    setTimeout(function () {
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);

    setTimeout(function () {
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);

    setTimeout(function () {
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);

    setTimeout(function () {
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);

    setTimeout(function () {
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);

    setTimeout(function () {
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);

    setTimeout(function () {
        document.getElementById("CountdownTimer").innerHTML = "BLAST OFF!!!!";
    }, 10000);
}