import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    const { src, alt, updateModalImage, largeImageSrc } = this.props;
    return (
      <div
        onClick={() => {
          updateModalImage(largeImageSrc);
        }}
      >
      <li className={css.image_gallery_li}>
         <img className={css.image_gallery_item} src={src} alt={alt} />
      </li>
       
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
