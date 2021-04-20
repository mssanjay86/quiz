var subbtn = document.querySelector("#submitbtn");
var resbtn = document.querySelector("#resetbtn");
var inp = document.querySelector("input[type=radio]");
var count = 0;
var total = 10;
var one = document.getElementById("charlesbabbage");
var two = document.getElementById("guido");
var three = document.getElementById("both");
var four = document.getElementById("css");
var five = document.getElementById("sql");
var six = document.getElementById("anirudh");
var seven = document.getElementById("kerala");
var eight = document.getElementById("srh");
var nine = document.getElementById("asuran");
var ten = document.getElementById("brendon");
var correct = document.getElementById("score");
var wrong = document.getElementById("wrong");

correct.disabled = true;
wrong.disabled = true;
subbtn.addEventListener('click', function() {
    if (one.checked == true) {
        count = count + 1;

    }
    if (two.checked == true) {
        count = count + 1;
    }
    if (three.checked == true) {
        count = count + 1;
    }
    if (four.checked == true) {
        count = count + 1;
    }
    if (five.checked == true) {
        count = count + 1;
    }
    if (six.checked == true) {
        count = count + 1;
    }
    if (seven.checked == true) {
        count = count + 1;

    }
    if (eight.checked == true) {
        count = count + 1;

    }
    if (nine.checked == true) {
        count = count + 1;

    }
    if (ten.checked == true) {
        count = count + 1;
    }
    score.value = count;
    wrong.value = total - score.value;
    subbtn.disabled = true;

    correct.disabled = true;
    wrong.disabled = true;
});
resbtn.addEventListener("click", function() {
    if (one.checked == true || two.checked == true || three.checked == true || four.checked == true || five.checked == true || six.checked == true || seven.checked == true || eight.checked == true || nine.checked == true || ten.checked == true) {
        one.checked = false;
        two.checked = false;
        three.checked = false;
        four.checked = false;
        five.checked = false;
        six.checked = false;
        seven.checked = false;
        eight.checked = false;
        nine.checked = false;
        ten.checked = false;
        score.value = 0;
        wrong.value = 0;
    }
});