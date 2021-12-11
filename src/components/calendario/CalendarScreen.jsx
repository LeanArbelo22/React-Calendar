import React, {useState} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';

const localizer = momentLocalizer(moment);
const events = [{
    title: 'Estudio',
    start: moment().toDate(),
    end: moment().add(1, 'hours').toDate(),
    user: {
        id: '01',
        name: 'Leandro'
    }
}]

function CalendarScreen() {

    const [lastView, setLastView] = useState('lastView' /* || 'month' */);

    const onDoubleClick = (e) => {
        /* console.log(e); */
    }
    const onSelect = (e) => {
       /*  console.log("un solo click"); */
    }
    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem(e, 'lastView')
    }

    return (
        <div className="container body mt-2">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                style={{height: 525}}
                onView={onViewChange}
                components={{
                    event: CalendarEvent
                }}
            />
            <CalendarModal />
        </div>
    )
};

export default CalendarScreen;
