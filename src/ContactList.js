import React from 'react'

const ContactList=({contacts,deleteContact,editContact})=>(
 <div>
  {contacts.map((contact)=>(
   <div key={contact.id}>
    <h2>
     {contact.firstNAme} {contact.middleName} {contact.lastName}
    </h2>

    <p>{contact.phoneNum}</p>

    <button onClick={()=>editContact(contact)}>Edit</button>
    <button onClick={()=>deleteContact(contact.id)}>Delete</button>
   </div>
  ))}
 </div>
)

export default ContactList