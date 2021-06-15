import axios from 'axios';
const baseUrl = process.env.REACT_APP_URL_API_DOGS;

const apiBreedList = {
  getBreeds: () => {
    return axios.get(`${baseUrl}/breeds/list/all`);
  }
}

export default apiBreedList;