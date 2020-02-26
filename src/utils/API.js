import axios from 'axios';

const APIKEY = '$2a$10$ESohdZro8tdmBB7xSIQSfeOtWb2Ha3buYEpUkjkTYx9vlOE0b4tBC'

export default {
    getAll: function() {
        return axios.get(`https://www.potterapi.com/v1/characters/?key=${APIKEY}`);
    },
    getCharacter : (searchValue) => {
        return axios.get(`https://www.potterapi.com/v1/characters/?key=${APIKEY}&name=${searchValue}`);
      },
}
