import { useState, useEffect } from 'react';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Form from './Form';

function App() {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) || []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return; 
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
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
