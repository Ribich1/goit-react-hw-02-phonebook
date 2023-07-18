import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm ';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList ';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleAddContact = e => {
    const contactEl = {
      id: nanoid(),
      name: e.name,
      number: e.number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contactEl, ...contacts],
      name: e.name,
      number: e.number,
    }));
    console.log('this.state.name', this.state.name);
    console.log('this.state.number', this.state.number);
    console.log('this.state.contacts', this.state.contacts);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList contactsArr={this.state.contacts} />
      </div>
    );
  }
}

export default App;
