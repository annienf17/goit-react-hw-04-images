import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';
import * as basicLightbox from 'basiclightbox';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.handleEscapeKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.handleEscapeKey);
  }

  handleImageClick = () => {
    const instance = basicLightbox.create(`
      <img src="${this.props.modalImageURL}" width="800" height="600">
    `);

    instance.show();
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.props.hideModal}>
        <div className={css.modal} onClick={event => event.stopPropagation()}>
          <img
            src={this.props.modalImageURL}
            alt="tag"
            onClick={this.handleImageClick}
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalImageURL: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
  handleEscapeKey: PropTypes.func,
};
