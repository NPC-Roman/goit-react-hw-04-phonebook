/*import React, { Component } from 'react';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Form from './Form';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    this.loadContactsFromLocalStorage();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      this.saveContactsToLocalStorage();
    }
  }

  loadContactsFromLocalStorage() {
    try {
      const storedContacts = JSON.parse(localStorage.getItem('contacts'));
      if (storedContacts) {
        this.setState({ contacts: storedContacts });
      }
    } catch (error) {
      console.error('Error loading contacts from local storage:', error);
    }
  }

  saveContactsToLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  handleAddContact = newContact => {
    const { contacts } = this.state;
    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleFilterContact = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filterContacts() {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  handleRemoveContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <div>
        <h1
          style={{
            marginTop: '25px',
            textAlign: 'center',
            color: 'rgb(145, 122, 122)',
          }}
        >
          Phonebook
        </h1>
        <Form addToContact={this.handleAddContact} />
        <h2
          style={{
            marginTop: '20px',
            textAlign: 'center',
            color: 'rgb(145, 122, 122)',
          }}
        >
          Contacts:
        </h2>
        {contacts.length !== 0 && (
          <Filter value={filter} filterContacts={this.handleFilterContact} />
        )}
        {contacts.length !== 0 && (
          <Contacts
            contacts={this.filterContacts()}
            onRemove={this.handleRemoveContact}
          />
        )}
      </div>
    );
  }
}

export default App;*/

import React, { useState, useEffect } from 'react';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Form from './Form';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    loadContactsFromLocalStorage();
  }, []);

  useEffect(() => {
    saveContactsToLocalStorage();
  }, [contacts]);

  const loadContactsFromLocalStorage = () => {
    try {
      const storedContacts = JSON.parse(localStorage.getItem('contacts'));
      if (storedContacts) {
        setContacts(storedContacts);
      }
    } catch (error) {
      console.error('Error loading contacts from local storage:', error);
    }
  };

  const saveContactsToLocalStorage = () => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  const handleAddContact = newContact => {
    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  const handleFilterContact = event => {
    setFilter(event.currentTarget.value);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleRemoveContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1
        style={{
          marginTop: '25px',
          textAlign: 'center',
          color: 'rgb(145, 122, 122)',
        }}
      >
        Phonebook
      </h1>
      <Form addToContact={handleAddContact} />
      <h2
        style={{
          marginTop: '20px',
          textAlign: 'center',
          color: 'rgb(145, 122, 122)',
        }}
      >
        Contacts:
      </h2>
      {contacts.length !== 0 && (
        <Filter value={filter} filterContacts={handleFilterContact} />
      )}
      {contacts.length !== 0 && (
        <Contacts contacts={filterContacts()} onRemove={handleRemoveContact} />
      )}
    </div>
  );
}

export default App;
