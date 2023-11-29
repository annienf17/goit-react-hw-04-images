import React, { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className={css.load_more}>
        <button className={css.load_more_button} onClick={onClick}>
          Load more
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
