<!-- import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const ContactForm = ({
  addContact,
}) => {
  const [contact, setContact] = useState({
    id: '',
    firstName: '',
    middleName: '',
    lastName: '',
    phoneNumber: '',
  })

  useEffect(() => {
    if (contactToBeEdited) {
      setContact(contactToBeEdited)
    } else {
      setContact({
        id: '',
        firstName: '',
        middleName: '',
        lastName: '',
        phoneNumber: '',
      })
    }
  }, [contactToBeEdited])

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (contact.firstName.trim() && contact.lastName.trim()) {
      if (contact.id) {
        updateContact(contact)
      } else {
        addContact({ ...contact, id: uuidv4() })
      }
      setContact({
        id: '',
        firstName: '',
        middleName: '',
        lastName: '',
        phoneNumber: '',
      })
      setContactToBeEdited(null) // Add this line
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='First Name'
        name='firstName'
        value={contact.firstName}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Middle Name'
        name='middleName'
        value={contact.middleName}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Last Name'
        name='lastName'
        value={contact.lastName}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Phone Number'
        name='phoneNumber'
        value={contact.phoneNumber}
        onChange={handleChange}
      />
      <button>{contactToBeEdited ? 'Update' : 'Add'}</button>
    </form>
  )
}

export default ContactForm -->
