import React, { useState } from 'react';
import './ContactList.css';

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', email: '', phone: '' });
  const [editIndex, setEditIndex] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  // Add or Edit contact
  const handleAddOrEditContact = () => {
    if (!newContact.name || !newContact.email || !newContact.phone) {
      alert('All fields are required!');
      return;
    }

    if (editIndex !== null) {
      const updatedContacts = [...contacts];
      updatedContacts[editIndex] = newContact;
      setContacts(updatedContacts);
      setEditIndex(null);
    } else {
      setContacts([...contacts, newContact]);
    }

    setNewContact({ name: '', email: '', phone: '' });
  };

  // Edit contact
  const handleEdit = (index) => {
    setNewContact(contacts[index]);
    setEditIndex(index);
  };

  // Delete contact
  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newContact.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newContact.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={newContact.phone}
          onChange={handleInputChange}
        />
        <button onClick={handleAddOrEditContact}>
          {editIndex !== null ? 'Update Contact' : 'Add Contact'}
        </button>
      </div>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <div>
              <strong>{contact.name}</strong> | {contact.email} | {contact.phone}
            </div>
            <div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
