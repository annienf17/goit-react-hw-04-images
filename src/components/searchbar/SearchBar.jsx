import React, { Component } from 'react';
import css from './SearchBar.module.css';

export class SearchBar extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <div>
        <form className={css.form} onSubmit={handleSubmit}>
          <input className={css.input} type="text" onChange={handleChange} />
          <button className={css.search_button} type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
