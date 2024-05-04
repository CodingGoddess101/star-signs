import React from 'react'
import '../css/footer/footer.css'

const Dates = () => {
    let currentMonth;
    let currentdaytype;
    const datetime = new Date();
    const date = datetime.getDate();
    const month = datetime.getMonth() + 1;
    switch (month) {
        case 1:
            currentMonth = 'January';
            break;
        case 2:
            currentMonth = 'February';
            break;
        case 3:
            currentMonth = 'March';
            break;
        case 4:
            currentMonth = 'April';
            break;
        case 5:
            currentMonth = 'May';
            break;
        case 6:
            currentMonth = 'June';
            break;
        case 7:
            currentMonth = 'July';
            break;
        case 8:
            currentMonth = 'August';
            break;
        case 9:
            currentMonth = 'September';
            break;
        case 10:
            currentMonth = 'October';
            break;
        case 11:
            currentMonth = 'November';
            break;
        case 12:
            currentMonth = 'December';
            break;
        default: 'Month settings not correct'
    }


    if (date === 1 || date === 21 || date === 31) {
        currentdaytype = 'st'
    }
    else if (date === 2 || date === 22) {
        currentdaytype = 'nd'
    }
    else if (date === 3 || date === 23) {
        currentdaytype = 'rd'
    }
    else if (date >= 4 && date <= 20 || date >= 24 && date <= 30) {
        currentdaytype = 'th'
    }
    else {
        currentdaytype = "time and date settings aren't correct"
    }

    return (
        <section>
            <p>Date: {date}{currentdaytype} of {currentMonth}, {datetime.getFullYear()}</p>
        </section>
    )
}

const Footer = () => {
    return (
        <footer>
            <Dates />
        </footer>
    )
}

export default Footer
