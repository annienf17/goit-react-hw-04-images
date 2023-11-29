import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  render() {
    const { src, alt, updateModalImage, largeImageSrc } = this.props;
    return (
      <div
        onClick={() => {
          updateModalImage(largeImageSrc);
        }}
      >
        <img src={src} alt={alt} />
      </div>
    );
  }
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  updateModalImage: PropTypes.func.isRequired,
  largeImageSrc: PropTypes.string.isRequired,
};
