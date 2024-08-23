import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}

    </ul>
  );
}

export default ContactList;