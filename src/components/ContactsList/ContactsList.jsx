import { List, Item, ContactValue } from './ContactsList.styled';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ContactValue>
              {name}
              <span>{number}</span>
            </ContactValue>
            <button type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactsList;
