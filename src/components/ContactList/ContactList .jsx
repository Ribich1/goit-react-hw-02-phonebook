import React from 'react';

const ContactList = ({ contactsArr }) => (
  <ul className="ContactsList">
    {contactsArr.map(({ id, name, number }) => (
      <li key={id} className="ContactsList__item">
        {name}:{number}
      </li>
    ))}
  </ul>
);

export default ContactList;
