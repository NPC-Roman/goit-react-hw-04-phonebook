/*import React, { Component } from 'react';
import shortid from 'shortid';
import css from './Form.module.css';

class Form extends Component {
  nameFormId = shortid.generate();
  numberFormId = shortid.generate();

  state = {
    name: '',
    number: '',
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  onHandleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmitForm = evt => {
    evt.preventDefault();

    this.props.addToContact({
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    });

    this.resetForm();
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm} className={css.form}>
        <label htmlFor={this.nameFormId} className={css.labelForm}>
          Name{' '}
        </label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.onHandleInputChange}
          id={this.nameFormId}
          className={css.inputForm}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor={this.numberFormId} className={css.labelForm}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.onHandleInputChange}
          id={this.numberFormId}
          className={css.inputForm}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={css.btnForm}>
          Add to contact
        </button>
      </form>
    );
  }
}
export default Form;*/

import React, { useState } from 'react';
import shortid from 'shortid';
import css from './Form.module.css';

function Form({ addToContact }) {
  const nameFormId = shortid.generate();
  const numberFormId = shortid.generate();

  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const resetForm = () => {
    setFormData({
      name: '',
      number: '',
    });
  };

  const onHandleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitForm = evt => {
    evt.preventDefault();

    addToContact({
      id: shortid.generate(),
      name: formData.name,
      number: formData.number,
    });

    resetForm();
  };

  return (
    <form onSubmit={onSubmitForm} className={css.form}>
      <label htmlFor={nameFormId} className={css.labelForm}>
        Name{' '}
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={onHandleInputChange}
        id={nameFormId}
        className={css.inputForm}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor={numberFormId} className={css.labelForm}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        value={formData.number}
        onChange={onHandleInputChange}
        id={numberFormId}
        className={css.inputForm}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.btnForm}>
        Add to contact
      </button>
    </form>
  );
}

export default Form;
