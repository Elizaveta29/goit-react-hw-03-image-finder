import axios from 'axios';


const API_KEY = '27616591-ea38afb15630e129e17ab0ac4';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
	key: API_KEY,
  orientation: 'horizontal',
	image_type: 'photo',
  per_page: 12,
};

export const fetchImages = async (query, page) => {
	const {data} = await axios.get(`?q=${query}&page=${page}`);
  return data;
};

export default fetchImages;