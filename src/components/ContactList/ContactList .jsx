import React from 'react';

const ContactList = ({ contactsArr }) => (
  <ul className="ContactsList">
    {contactsArr.map(({ id, name }) => (
      <li key={id} className="ContactsList__item">
        {name}
      </li>
    ))}
  </ul>
);

export default ContactList;
