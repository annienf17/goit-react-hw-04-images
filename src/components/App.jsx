import React, { Component } from 'react';
import { SearchBar } from './searchbar/SearchBar';
import axios from 'axios';
import { ImageGallery } from './imagegallery/ImageGallery';
import Modal from './modal/Modal';
import Loader from './loader/Loader';

export class App extends Component {
  state = {
    images: [],
    keyword: '',
    page: 1,
    isLoading: false,
    error: '',
    isModalVisible: false,
    modalImageSrc: '',
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
    const API_KEY = '5341847-0da0fa42220482382c220c44b';
    const IMAGE_TYPE = 'photo';
    const ORIENTATION = 'horizontal';
    const SAFESEARCH = 'true';
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
          image_type: IMAGE_TYPE,
          orientation: ORIENTATION,
          safesearch: SAFESEARCH,
          per_page: pageLimit,
          page: page,
        },
      });

      this.setState(prevState => ({
        images: [...prevState.images, ...response.data.hits],
        isLoading: false,
      }));
      console.log(page);
    } catch (error) {
      console.log(error);
      this.setState({ error: 'Failed to fetch images.', isLoading: false });
    }
  };

  handleChange = event => {
    this.setState({ keyword: event.target.value });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  updateModalImage = (event, src) => {
    event.preventDefault();
    this.setState({
      modalImageSrc: src,
      isModalVisible: true,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const newState = this.state;
    if (newState.page !== prevState.page && newState.images.length !== 0) {
      this.fetchImages();
    }
  }

  render() {
    const { images, isModalVisible, modalImageSrc, isLoading } = this.state;
    return (
      <div>
        {isModalVisible && <Modal src={modalImageSrc} />}
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {isLoading && <Loader />}
        {images.length !== 0 && (
          <ImageGallery
            images={images}
            loadMore={this.handleLoadMore}
            updateModalImage={this.updateModalImage}
          />
        )}
      </div>
    );
  }
}