import React, { Component } from 'react';
import ImageGalleryItem from '../imagegalleryitem/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    const { images, updateModalImage } = this.props;
    return (
      <ul className={css.imageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
            largeImageSrc={image.largeImageURL}
            updateModalImage={updateModalImage}
          />
        ))}
      
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired
  })).isRequired,
  updateModalImage: PropTypes.func.isRequired
};
