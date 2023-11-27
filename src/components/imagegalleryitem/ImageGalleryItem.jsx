import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  render() {
    const { src, alt, updateModalImage, largeImageSrc } = this.props;
    return (
      <>
        <a
          href={largeImageSrc}
          onClick={() => {
            updateModalImage(largeImageSrc);
          }}
        >
          <img src={src} alt={alt} />
        </a>
      </>
    );
  }
}