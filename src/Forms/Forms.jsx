import { Component } from 'react';
import s from './Forms.module.css';

export default class Forms extends Component {
  state = { name: '', number: '' };

  handleInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.getSubmit(this.state);
    this.resetInput();
  };
  resetInput = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <div className={s.inputContainer}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInput}
            className={s.input}
          ></input>
          <label className={s.label}>Name:</label>
        </div>
        <div className={s.inputContainer}>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleInput}
            className={s.input}
          ></input>
          <label className={s.label}>Number:</label>
        </div>
        <button type="submit" className={s.borderButton}>
          Add contact
        </button>
      </form>
    );
  }
}
