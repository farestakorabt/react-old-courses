import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../Context";

export default class List extends Component {
  componentDidUpdate() {
    console.log("component updated");
  }



  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <>
              <h1 className="display-5 my-4">Nos contacts</h1>
              {value.contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  id={contact.id}
                  nom={contact.nom}
                  email={contact.email}
                  tel={contact.tel}
                />
              ))}
            </>
          );
        }}
      </Consumer>
    );
  }
}
