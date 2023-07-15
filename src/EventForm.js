import React, { useState, useEffect } from 'react'
function EventForm({
  addEvent,
  updateEvent,
  editing,
  setEditing,
  currentEvent,
}) {
  const [event, setEvent] = useState(currentEvent)

  useEffect(() => {
    setEvent(currentEvent)
  }, [editing, currentEvent])

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editing) {
      updateEvent(event.id, event)
    } else {
      addEvent(event)
    }

    setEvent({ id: '', name: '', date: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='id'
        value={event.id}
        onChange={handleChange}
        placeholder='ID'
        required
      />
      <input
        name='name'
        value={event.name}
        onChange={handleChange}
        placeholder='Name'
        required
      />
      <input
        type='date'
        name='date'
        value={event.date}
        onChange={handleChange}
        required
      />
      <button type='submit'>
        {editing ? 'update' : 'Add'}
        Event
      </button>
      {editing && (
        <button type='button' onClick={() => setEditing(false)}>
          cancel
        </button>
      )}
    </form>
  )
}

export default EventForm
