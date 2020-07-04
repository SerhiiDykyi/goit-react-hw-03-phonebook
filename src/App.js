import React, { Component } from 'react';
import shortid from 'shortid';
import Wrapper from './components/Wrapper';
import Form from './components/Form';
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
  render() {
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <Form onAddContact={this.addContact} />
      </Wrapper>
    );
  }
}

export default App;
