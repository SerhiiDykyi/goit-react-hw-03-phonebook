import React, { Component } from 'react';
import shortid from 'shortid';

import Wrapper from './components/Wrapper';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    if (name === '') {
      return alert('Please, fill out the form!');
    }
    const isExist = this.state.contacts.some(contact => contact.name === name);
    if (isExist) {
      return alert(`${name} is already in contacts`);
    }
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <Form onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          options={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}

export default App;
