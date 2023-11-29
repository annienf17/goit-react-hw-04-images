import React, { Component } from 'react';
import axios from 'axios';
import { SearchBar } from './searchbar/SearchBar';
import { ImageGallery } from './imagegallery/ImageGallery';
import { Modal } from './modal/Modal';
import { Loader } from './loader/Loader';
import { Button } from './button/Button';

const API_KEY = '5341847-0da0fa42220482382c220c44b';

export class App extends Component {
  state = {
    images: [],
    keyword: '',
    page: 1,
    isLoading: false,
    error: '',
    isModalVisible: false,
    modalImageURL: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      images: [],
      page: 1,
    });
    this.fetchImages();
  };

  fetchImages = async () => {
    const pageLimit = 12;
    const { keyword, page } = this.state;

    try {
      this.setState({
        isLoading: true,
      });
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

      this.setState(prevState => ({
        images: [...prevState.images, ...response.data.hits],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
      this.setState({ error: 'Failed to fetch images.', isLoading: false });
    }
  };

  handleChange = event => {
    this.setState({ keyword: event.target.value });
  };

  handleLoadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      () => {
        this.fetchImages();
      }
    );
  };

  handleShowModal = url => {
    this.setState({
      isModalVisible: true,
      modalImageURL: url,
    });
  };

  handleHideModal = () => {
    this.setState({ isModalVisible: false });
  };

  handleEscapeKey = event => {
    if (event.key === 'Escape') {
      this.handleHideModal();
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page && this.state.images.length > 0) {
      this.fetchImages();
    }
  }

  render() {
    const { images, isModalVisible, modalImageURL, isLoading } = this.state;
    return (
      <div>
        {isModalVisible && (
          <Modal
            modalImageURL={modalImageURL}
            hideModal={this.handleHideModal}
          />
        )}

        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {isLoading && <Loader />}
        {images.length > 0 && (
          <ImageGallery
            images={images}
            loadMore={this.handleLoadMore}
            updateModalImage={this.handleShowModal}
          />
        )}
        {!isLoading && images.length > 0 && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
