import axios from 'axios';
const baseUrl = process.env.REACT_APP_URL_API_DOGS;

const apiBreed = {
  getBreed: (breed) => {
    return axios.get(`${baseUrl}/breed/${breed}/images`);
  }
}

export default apiBreed;