import React from 'react';

const CalendarEvent = ({event}) => {
    //console.log(event);
    const {title, user} = event;

    return (  
        <div>
            <span>Evento: {title}.</span>
            <span> Creado por: {user.name}.</span>
        </div>
    )
}

export default CalendarEvent;
