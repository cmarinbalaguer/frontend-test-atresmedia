import axios from 'axios';
const baseUrl = process.env.REACT_APP_URL_API_DOGS;

const apiBreedList = {
  getSubBreed: (breed) => {
    return axios.get(`${baseUrl}/breed/${breed}/list`);
  },
  getImagesSubBreed: (subBreed, breed) => {
    return axios.get(`${baseUrl}/breed/${breed}/${subBreed}/images`);
  }
}

export default apiBreedList;