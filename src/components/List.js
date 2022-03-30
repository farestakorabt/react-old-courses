import React, { Component } from "react";
import Contact from "./Contact";

export default class List extends Component {
  state = {
    contacts: [
      {
        id: 1,
        nom: "John doe",
        email: "johnanzef@ezf.de",
        tel: "666 - 666 - 666",
      },
      {
        id: 2,
        nom: "Jorthhn dhrtoe",
        email: "johnarthnzef@ezf.de",
        tel: "555 - 555 - 555",
      },
      {
        id: 3,
        nom: "Jofgsdhn dofhe",
        email: "johnagdbhnzef@ezf.de",
        tel: "111 - 111 - 111",
      },
    ],
  };

  supprime = (id) => {
    const nvContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );

    this.setState({
      contacts: nvContacts,
    });
  };

  render() {
    return (
      <>
        {this.state.contacts.map((contact) => (
          <Contact
            key={contact.id}
            nom={contact.nom}
            email={contact.email}
            tel={contact.tel}
            supprimeClick={() => this.supprime(contact.id)}
          />
        ))}
      </>
    );
  }
}
