import React, { useState } from 'react'
import EventForm from './EventForm'
import EventList from './EventList'

function App() {
 const[events,setEvents]=useState([])
 const[editing,setEditing]=useState(false)
 const[currentEvent,setCurrentEvent]=useState({
  id:null,
  name:'',
  date:'',

 })
 const addEvent=(event)=>{
  setEvents([...events,event])
 }

 const deleteEvent=(id)=>{
  setEvents(events.filter((event)=>event.id !==id))
 }

 const editEvent=(event)=>{
  setEditing(true)
  setCurrentEvent({id:event.id,name:event.name,date:event.date})
 }

 const updateEvent=(id,updateEvent)=>{
  setEditing(false)
  setEvents(events.map((event)=>(event.id === id ? updateEvent: event)))
 }
return(
  <div className='App'>
    <EventForm
    editing={editing}
    setEditing={setEditing}
    currentEvent={currentEvent}
    addEvent={addEvent}
    updateEvent={updateEvent}
    />

    <EventList
    events={events}
    deleteEvent={deleteEvent}
    editEvent={editEvent}
    />
  </div>
)


}

export default App
