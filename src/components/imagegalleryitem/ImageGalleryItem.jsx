import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  src,
  alt,
  updateModalImage,
  largeImageSrc,
}) => {
  const handleClick = () => {
    updateModalImage(largeImageSrc);
  };

  return (
    <div onClick={handleClick}>
      <li className={css.image_gallery_li}>
        <img className={css.image_gallery_item} src={src} alt={alt} />
      </li>
    </div>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  updateModalImage: PropTypes.func.isRequired,
  largeImageSrc: PropTypes.string.isRequired,
};
