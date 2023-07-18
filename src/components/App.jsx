import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm ';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList ';
import Filter from './Filter/Filter ';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVissibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter filterEl={this.state.filter} onChangeEl={this.changeFilter} />
        <ContactList contactsArr={this.getVissibleContacts()} />
      </div>
    );
  }
}

export default App;
