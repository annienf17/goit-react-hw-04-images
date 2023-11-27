import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}