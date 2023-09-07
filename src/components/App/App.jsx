import { Component } from 'react';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

import { Container } from './App.styled';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = data => {
    const newContact = { id: nanoid(), ...data };

    this.setState({ contacts: [newContact, ...this.state.contacts] });
  };

  filterChange = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    console.log('this.state', this.state);

    const { contacts, filter } = this.state;

    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact} />
        <h2>Contacts</h2>
        <Filter
          title="Find contacts by name"
          filterChange={this.filterChange}
        />
        <ContactsList
          contacts={filterContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
