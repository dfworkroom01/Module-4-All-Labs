// Problem 1: Number of days between birthdate and current date
const birthdate = moment('1976-01-01'); // not my actual birthdate
const currentDate = moment();
const daysBetween = currentDate.diff(birthdate, 'days');
document.getElementById('days-between').textContent = `${daysBetween} days`;

// Problem 2: Display the number of years, months, and days
const duration = moment.duration(currentDate.diff(birthdate));
const years = duration.years();
const months = duration.months();
const days = duration.days();
document.getElementById('years-months-days').textContent = `${years} years, ${months} months, and ${days} days`;

// Problem 3: Given two dates, display the date closest to the current date
const date1 = moment('2024-08-01');
const date2 = moment('2025-01-01');
const diffDate1 = Math.abs(currentDate.diff(date1, 'days'));
const diffDate2 = Math.abs(currentDate.diff(date2, 'days'));
const closestDate = diffDate1 < diffDate2 ? date1 : date2;
document.getElementById('closest-date').textContent = closestDate.format('YYYY-MM-DD');

// Problem 4: Given two dates, display whether the first date is before or after the second date
const firstDate = moment('2024-08-01');
const secondDate = moment('2025-01-01');
const comparisonText = firstDate.isBefore(secondDate) 
    ? `The first date (${firstDate.format('YYYY-MM-DD')}) is before the second date (${secondDate.format('YYYY-MM-DD')})`
    : `The first date (${firstDate.format('YYYY-MM-DD')}) is after the second date (${secondDate.format('YYYY-MM-DD')})`;
document.getElementById('date-comparison').textContent = comparisonText;

// Problem 5: Display the current time in London
const londonTime = moment().tz("Europe/London").format('HH:mm:ss');
document.getElementById('london-time').textContent = londonTime;