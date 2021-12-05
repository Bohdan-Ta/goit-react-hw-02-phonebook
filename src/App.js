import { Component } from 'react';
import Sections from './Section';
import Forms from './Forms/Forms';
import { nanoid } from 'nanoid';
import Contacts from './Contacts';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ' ',
  };

  getDataSubmit = ({ name, number }) => {
    // const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onFilter = event => {
    this.setState({ filter: event.target.value });
  };

  //======
  showFiltered = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  //=====

  render() {
    const { filter } = this.state;
    const filteredContacts = this.showFiltered();
    return (
      <div>
        <Sections title="Phonebook">
          <Forms getSubmit={this.getDataSubmit} />
        </Sections>
        <Sections title="Contacts">
          <Filter value={filter} onFilter={this.OnFilter} />
          <Contacts
            contacts={filteredContacts}
            onDeleteContact={this.onDeleteContact}
          />
        </Sections>
      </div>
    );
  }
}

export default App;
