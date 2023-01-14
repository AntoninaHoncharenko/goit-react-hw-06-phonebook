import { Contact } from '../ContactItem/ContactItem';
import { Notification } from '../Notification/Notification';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div>
      <ul>
        {filteredContacts.map(contact => {
          return <Contact contact={contact} key={contact.id} />;
        })}
      </ul>
      {filteredContacts.length < 1 && <Notification />}
    </div>
  );
};
