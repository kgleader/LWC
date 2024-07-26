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


