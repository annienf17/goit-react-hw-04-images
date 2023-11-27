import axios from 'axios';

const API_KEY = '5341847-0da0fa42220482382c220c44b';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';
const pageLimit = 12;

export const fetchImages = async (keyword) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: keyword,
        image_type: IMAGE_TYPE,
        orientation: ORIENTATION,
        safesearch: SAFESEARCH,
        per_page: pageLimit,
        page: 1,
      },
    });

    const { hits } = response.data;

    return hits;
  } catch (error) {
    console.log(error);
  }
};