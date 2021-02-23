let calendar;

document.addEventListener('DOMContentLoaded', function () {

    let calendarEl = document.getElementById('calendar');
    let calendarDetails = document.getElementById('calendarDetails');

    calendarDetails.addEventListener('toggle', event => {
        if (calendarDetails.open) {
            calendar.render()
        } else {
            /* the element was toggled closed */
        }
    })

    calendar = new FullCalendar.Calendar(calendarEl, {
        contentHeight: 'auto',
        nowIndicator: 'true',
        displayEventEnd: true,
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'today'
        },
        initialView: 'dayGridMonth',

        views: {
            listDays: {
                type: 'list',
                duration: { days: 14 },
                buttonText: 'Agenda'
            }
        },

        events: {
            googleCalendarId: 'dhornbein.com_56josjjh1538rf2nk960acouog@group.calendar.google.com',
            className: 'moon-event'
        },

        // googleCalendarApiKey: 'AIzaSyAJGqw59earJuG0-nprn5LtuVt-62L00-s',
        googleCalendarApiKey: 'AIzaSyBnLK6S8Pj26annjxv5bqIvKyR2ZOqlaJk',

        eventDidMount: function (info) {
            // fires when event mounts
        },

        eventClick: function (arg) {
            console.log(arg);
            // prevents click from doing anything we don't want
            arg.jsEvent.preventDefault();
        },
        

    });


    // calendar.render();
});

