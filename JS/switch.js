let day = 'Friday'

switch (day){
    case 'Monday': console.log('It is Monday')
    break
    
    case 'Tuesday': console.log('It is Tuesday')
    break
    
    case 'Friday': console.log('Yes it is a Friday')
    break // if we will remove break than next and both codes works. Break stops codes.

    case 'Wednesday': console.log('It is a second Friday')

    default: console.log('Not found')
    
}

// Get the current day of the week
const currentDay = new Date().getDay();

// Define the messages
const workingDayMessage = "Oh no, Working days";
const weekendMessage = "Hehe, Weekdays";

// Display the message based on the day of the week
if (currentDay >= 1 && currentDay <= 5) {
    console.log(workingDayMessage);
} else {
    console.log(weekendMessage);
}

function isDivisibleBy5And11(number) {
    if (number % 5 === 0 && number % 11 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage
const number = 55; // Change this value to test with different numbers
if (isDivisibleBy5And11(number)) {
    console.log(`${number} is divisible by both 5 and 11.`);
} else {
    console.log(`${number} is not divisible by both 5 and 11.`);
}


function getGrade(score){
    if(score >= 80 && score <= 100){
        return 'A';
    } else if (score >=70 && score <= 79){
        return 'B';
    } else if (score >=60 && score <= 69){
        return 'C';
    } else if (score >= 50 && score <= 59){
        return 'D';
    } else if (score >=0 && score <= 49){
        return 'F';
    } else {
        return 'Invalid score';
    }
}

// example usage

const score = [95, 72, 65, 55, 40, 105, -5];
score.forEach(score =>{
    console.log('Score: ${score}, Grade: ${getGrdae(score)}
});