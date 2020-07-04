import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.scss';

const ContactList = ({ options, onDeleteContact }) => {
  return (
    <>
      <ul className="contact_list">
        {options.map(({ id, name, number }) => (
          <li className="contact_item" key={id}>
            <span>
              {name}: {number}
            </span>
            <button className="button-del" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
ContactList.propTypes = {
  option: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.number,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
