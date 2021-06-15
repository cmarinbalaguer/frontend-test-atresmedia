import axios from 'axios';

const apiBreed = {
  getBreed: (breed) => {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`);
  }
}

export default apiBreed;