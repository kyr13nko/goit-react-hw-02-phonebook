import { nanoid } from 'nanoid';

import Form from 'components/Form/Form';
import { Component } from 'react';
import ContactsList from 'components/ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = data => {
    const newContact = { id: nanoid(), ...data };

    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <Form createContact={this.createContact} />
        <h2>Contacts</h2>
        <ul>
          <ContactsList contacts={this.state.contacts} />
        </ul>
      </>
    );
  }
}

export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
