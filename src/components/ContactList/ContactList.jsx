import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ filterContact, deleteContact }) => {
  const filteredContacts = filterContact();

  return (
    <table className={css.table}>
      <thead className={css.header}>
        <tr>
          <th>name</th>
          <th>number</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {filteredContacts.map(filteredContact => (
        <ContactListItem
          key={filteredContact.id}
          filteredContact={filteredContact}
          deleteContact={deleteContact}
        />
      ))}
      </tbody>
    </table>
  );
};

ContactList.propTypes = {
  filterContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
