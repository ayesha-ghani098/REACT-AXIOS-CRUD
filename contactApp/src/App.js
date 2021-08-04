import React, { useState, useEffect } from 'react';

// Style
import '../src/components/css/style.css';

// Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Id generator
import { uuid } from 'uuidv4';

// Api
import api from '../src/api/contacts';

// Components
import AddContact from '../src/components/AddContact';
import ContactList from '../src/components/ContactList';
import ContactDetail from '../src/components/ContactDetail';
import UpdateContact from '../src/components/UpdateContact';

const App = () => {
  const [contacts, setContacts] = useState([]);

  // GET All Contacts using useEffect
  useEffect(() => {
    try {
      const getContacts = async () => {
        const Contacts = await retrieveContacts();
        if (Contacts) setContacts(Contacts);
      };
      getContacts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Retrieve Contacts from Api
  const retrieveContacts = async () => {
    const response = await api.get('/contacts');
    return response.data;
  };

  // ADD Contacts
  const addContact = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post('/contacts', request);
    setContacts([...contacts, response.data]);
  };

  // DELETE Contacts
  const deleteContact = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  // UPDATE Contacts
  const updateContact = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route
            path='/'
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                deletecontact={deleteContact}
              />
            )}
          />
          <Route
            path='/add'
            render={(props) => (
              <AddContact {...props} addContact={addContact} />
            )}
          />
          <Route
            path='/edit'
            render={(props) => (
              <UpdateContact {...props} updateContact={updateContact} />
            )}
          />
          <Route
            path='/contact/:id'
            render={(props) => <ContactDetail {...props} />}
          />
          <Route />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
