import React, { Component } from "react";
import ContactForm from "./Components/ContactForm/ContactForm.jsx";
import ContactList from "./Components/ContactList/ContactList.jsx";
import Filter from "./Components/Filter/Filter.jsx";
import s from "./App.module.css";

import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  formSubmitHandler = (data) => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: uuidv4(), ...data }],
    }));
  };

  onDelete = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id.target.id),
    }));
  };

  onFind = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const lowerFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(lowerFilter));

    return (
      <div>
        <h1 className={s.titleH1}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} listArrey={contacts} />
        <h2 className={s.titleH2}>Contacts</h2>
        <Filter value={filter} onSearch={this.onFind} />
        <ContactList contacts={filteredContacts} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
