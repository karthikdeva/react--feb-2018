import React, {Component} from "react"
import propTypes from "prop-types"

class ListContacts extends Component {
    static propTypes = {
        contacts: propTypes.array.isRequired,
        onDeleteContact: propTypes.func.isRequired
    }
    state = {
        query: ""
    }
    updateQuery = (query => {
        this.setState({
            query: query.trim()
        })
    })
    render() {
        return (
            <div className="list-contacts">
            {JSON.stringify(this.state.query)}
                <div className="list-contacts-top">
                    <input
                        type="text"
                        className="search-contacts"
                        placeholder="Search contacts"
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}/>
                </div>
                <ol className="contact-list">
                    {this
                        .props
                        .contacts
                        .map((contact, index) => (
                            <li key={contact.id} className="contact-list-item">
                                <div
                                    className="contact-avatar"
                                    style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}></div>
                                <div className="contact-details">
                                    <p>{contact.name}</p>
                                    <p>{contact.email}</p>
                                </div>
                                <button
                                    onClick={() => this.props.onDeleteContact(contact)}
                                    className="contact-remove"></button>
                            </li>
                        ))}
                </ol>
            </div>
        )
    }

}

export default ListContacts;
