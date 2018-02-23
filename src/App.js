import React, {Component} from 'react';
import ListContacts from "./ListContacts"

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
    contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      }, {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      }, {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]

  }
  removeContact = (contact) => {
    this.setState((state) => ({
      contacts : state.contacts.filter((c)=> c.id!==contact.id
    )
    }))
  };
  render() {
    return (
      <div>
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
