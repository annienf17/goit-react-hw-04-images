import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { SearchBar } from './searchbar/SearchBar';
import { ImageGallery } from './imagegallery/ImageGallery';
import { Modal } from './modal/Modal';
import { Loader } from './loader/Loader';
import { Button } from './button/Button';

const API_KEY = '5341847-0da0fa42220482382c220c44b';

export const App = () => {
  const [images, setImages] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalImageURL, setModalImageURL] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setImages([]);
    setPage(1);
    fetchImages();
  };

  const fetchImages = useCallback(async () => {
    const pageLimit = 12;

    try {
      setIsLoading(true);
      const response = await axios.get('https://pixabay.com/api/', {
        params: {
          key: API_KEY,
          q: keyword,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: 'true',
          per_page: pageLimit,
          page: page,
        },
      });

      setImages(prevImages => [...prevImages, ...response.data.hits]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [page, keyword]);

  const handleChange = event => {
    setKeyword(event.target.value);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleShowModal = url => {
    setIsModalVisible(true);
    setModalImageURL(url);
  };

  const handleHideModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (page !== 1 && images.length > 0) {
      fetchImages();
    }
  }, [page, fetchImages, images.length]);

  return (
    <div>
      {isModalVisible && (
        <Modal modalImageURL={modalImageURL} hideModal={handleHideModal} />
      )}
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {images.length > 0 && (
        <ImageGallery
          images={images}
          loadMore={handleLoadMore}
          updateModalImage={handleShowModal}
        />
      )}
      {!isLoading && images.length > 0 && <Button onClick={handleLoadMore} />}
    </div>
  );
};