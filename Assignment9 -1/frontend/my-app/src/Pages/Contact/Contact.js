import React from 'react'
import List from '../Layout/List';
import './contact.css';

const Contact = () => {

  const contacts = [
    {
        dept: "Artist",
        name: "Ayasha",
        contact: 857763898
    },
    {
        dept: "OPERATIONS",
        name: "Riya",
        contact:8577638928 
    },
    {
        dept: "HUMAN-RESOURCE",
        name: "Srujana",
        contact: 8577638928
    }
    
];

return(
  <div>
  <h2 className='contactsub'>Support Contacts</h2>
  {contacts.map(contact => (<List
    dept = {contact.dept}
    name = {contact.name}
    contact = {contact.contact}
  />))}
  </div>
)
}

export default Contact;

