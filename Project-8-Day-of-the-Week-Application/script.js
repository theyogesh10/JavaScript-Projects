let date = new Date();
let dayNumber = date.getDay();
let theDayIs;
let theQuoteIs;

switch (dayNumber) {

    case 0:
        theDayIs = "Sunday";
        theQuoteIs = "Sunday is a day to reflect, recharge, and get ready for a new week.";
        break;

    case 1:
        theDayIs = "Monday";
        theQuoteIs = "Monday is the day that opens up the week for many possibilities.";
        break;

    case 2:
        theDayIs = "Tuesday";
        theQuoteIs = "Tuesday is a reminder that there is still plenty of time to achieve great things this week.";
        break;

    case 3:
        theDayIs = "Wednesday";
        theQuoteIs = "Wednesday is a reminder that you're halfway through the week. Keep going.";
        break;

    case 4:
        theDayIs = "Thursday";
        theQuoteIs = "Thursday is full of grace, hope, and a reminder that the weekend is near.";
        break;

    case 5:
        theDayIs = "Friday";
        theQuoteIs = "It's Friday! Time to go make stories for Monday.";
        break;

    case 6:
        theDayIs = "Saturday";
        theQuoteIs = "Saturday is a day to be with friends, family, and to enjoy life's little moments.";
        break;
}

let dayOfTheWeek = document.getElementById("weekday-name");
dayOfTheWeek.innerHTML = `${theDayIs}`;

let quoteOfTheDay = document.getElementById("weekday-quote");
quoteOfTheDay.innerHTML = `${theQuoteIs}`; 