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
    end: moment().add(1, 'day').toDate(),
    user: {
        id: '01',
        name: 'Leandro'
    }
}]

function CalendarScreen() {
    
    
    const [lastView, setLastView] = useState(localStorage.getItem('lastView' || 'month' ));
    
    const onDoubleClick = (e) => {
        /* console.log(e); */
    }
    const onSelect = (e) => {
       /*  console.log("un solo click"); */
    }
    const onViewChange = (e) => {
        localStorage.setItem('lastView', e)
        setLastView(e)
        console.log(lastView)
    }  

    return (
        <div className="container body mt-2">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={ onSelect }
                style={{height: 525}}
                onView={ onViewChange }
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />
            <CalendarModal />
        </div>
    )
};

export default CalendarScreen;
