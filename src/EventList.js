import React from "react";

function EventList({events,deleteEvent,editEvent}){
 return(
  <ul>
   {events.map((event)=>(
    <li key={event.id}>
     {event.name}-{event.date}
     <button onClick={()=>editEvent(event)}>Edit</button>
     <button onClick={()=>deleteEvent(event.id)}></button>
    </li>
   ))}
  </ul>
 )
}
export default EventList