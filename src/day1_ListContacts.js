import React, { Component } from "react"

class ListContacts extends  Component {
    render() {
return (
            <ol className="contact-list">
                {this.props.contacts.map(
                    (contact,index) => (
                        <li key={contact.id} className="contact-list-item">
                        <div className="contact-avatar" style={{backgroundImage:`url(${contact.avatarURL})`}}></div>
                        <div className="contact-details">
                        <p>{contact.name}</p>
                        <p>{contact.email}</p>
                        </div>
                        <button className="contact-remove"></button>
                        </li>
                    ))}
            </ol>
        )
        
    }
}
export default ListContacts;
