import { List, Item, ContactValue } from './ContactsList.styled';

const ContactsList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ContactValue>
              {name}
              <span>{number}</span>
            </ContactValue>
            <button>Delete</button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactsList;
