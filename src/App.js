import React, {Component} from 'react';
import ListContacts from "./ListContacts"
import * as ContactsAPI from './utils/ContactsAPI'

/*
 ** State is a key property of React components.
 ** Being familiar with how state is used and how state is set (and reset)
    will help streamline building the UI of your app.
 ** By having a component manage its own state,
    any time there are changes made to that state,
    React will know and automatically make the necessary updates to the page.
*/

class App extends Component {
  state = {
    contacts: []

  }
  componentDidMount() {
    ContactsAPI
      .getAll()
      .then((contacts) => {
        this.setState({contacts: contacts})
      })
  }
  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state
        .contacts
        .filter((c) => c.id !== contact.id)
    }))
    ContactsAPI.remove(contact);
  };
  render() {
    return (
      <div>
        <ListContacts
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
