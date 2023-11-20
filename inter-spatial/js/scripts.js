// Highlights current date on office page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

/*
This JavaScript code is designed to highlight the current day of the week on a web page, specifically on the contact page. It uses the "DOMContentLoaded" event to ensure that the code runs after the HTML document has loaded. The code selects the list items containing information about the hours of operation and adds a "today" class to the list item corresponding to the current day of the week. This allows visitors to quickly identify the current day's operating hours on the office page.
*/