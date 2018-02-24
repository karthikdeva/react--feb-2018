import React, {Component} from 'react';
import {Route} from "react-router-dom";
import ListContacts from "./ListContacts"
import CreateContact from "./CreateContact";
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
  createContact = (contact) => {
    ContactsAPI
      .create(contact)
      .then(contact => {
        this.setState(state => ({
          contacts: this
            .state
            .contacts
            .concat([contact])
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (<ListContacts
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts}/>)}/>
        <Route
          path="/create"
          render={({history}) => (<CreateContact
          onCreateContact={(contact) => {
          this.createContact(contact)
        // history.push('/')
        }}/>)}/>
      </div>
    );
  }
}

export default App;
