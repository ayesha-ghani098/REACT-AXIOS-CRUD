import React from 'react';

// Style
import './css/style.css';

// Linking
import { Link } from 'react-router-dom';

// Component
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.deletecontact(id);
  };

  // Contacts List
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className='container'>
      <div className='header'>
        <div>
          <h1>Contact List</h1>
        </div>
        <div>
          <Link to='/add'>
            <button>Add Contact</button>
          </Link>
        </div>
      </div>
      <div>{renderContactList}</div>
    </div>
  );
};

export default ContactList;
