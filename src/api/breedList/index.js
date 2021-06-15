import axios from 'axios';

const apiBreedList = {
  getBreeds: () => {
    return axios.get(`https://dog.ceo/api/breeds/list/all`);
  }
}

export default apiBreedList;