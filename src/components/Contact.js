import React, { Component } from "react";

export default class Contact extends Component {
  state = {
    show: true,
  };

  montrerContact = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  supprimeContact = () => {
    this.props.supprimeClick();
  };

  render() {
    return (
      <div className="card card-body mb-3 text-center">
        <h4>
          {this.props.nom} &nbsp; &nbsp;
          <i
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
            onClick={this.montrerContact}
          ></i>
          <i
            className="fas fa-times"
            onClick={this.supprimeContact}
            style={{ cursor: "pointer", color: "red", float: "right" }}
          ></i>
        </h4>

        {this.state.show ? (
          <ul className="card card-body mb-3">
            <li className="list-group-item">Email: {this.props.email} </li>
            <li className="list-group-item">Téléphone: {this.props.tel} </li>
          </ul>
        ) : null}
      </div>
    );
  }
}
