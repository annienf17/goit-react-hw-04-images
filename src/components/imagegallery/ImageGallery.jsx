import ImageGalleryItem from '../imagegalleryitem/ImageGalleryItem';
import React, { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    const { images, loadMore, updateModalImage } = this.props;
    return (
      <div>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
            largeImageSrc={image.largeImageURL}
            updateModalImage={updateModalImage}
          />
        ))}
        <button onClick={loadMore}>Load More</button>
      </div>
    );
  }
}