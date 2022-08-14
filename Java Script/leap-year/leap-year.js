let userText = prompt("Enter a number: ");
let userNum = Number(userText);
let leapYear;

if (!(userNum % 4)){
    if (!(userNum % 100)) {
        if (!(userNum % 400)) {
            leapYear = "is a Leap Year!"; 
        } else {
            leapYear = "is not a Leap Year";
        }
    } else {
        leapYear = "is a Leap Year!";
    }
} else {
    leapYear = "is not a Leap Year";
}

console.log(userText + " " + leapYear + "!");