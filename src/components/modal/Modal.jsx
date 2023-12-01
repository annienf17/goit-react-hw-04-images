import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';
import * as basicLightbox from 'basiclightbox';

export const Modal = ({ modalImageURL, hideModal, handleEscapeKey }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleEscapeKey]);

  const handleImageClick = () => {
    const instance = basicLightbox.create(`
      <img src="${modalImageURL}" width="800" height="600">
    `);

    instance.show();
  };

  return (
    <div className={css.overlay} onClick={hideModal}>
      <div className={css.modal} onClick={event => event.stopPropagation()}>
        <img src={modalImageURL} alt="tag" onClick={handleImageClick} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalImageURL: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
  handleEscapeKey: PropTypes.func,
};
