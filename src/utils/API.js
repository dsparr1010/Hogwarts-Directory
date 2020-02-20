import axios from 'axios';

const APIKEY = `${process.env.APIKEY}`

export default {
    getAll: function() {
        return axios.get(`https://www.potterapi.com/v1/characters/?key=${APIKEY}`);
    },
    getCharacter : (name) => {
        return axios.get(`https://www.potterapi.com/v1/characters/?key=${APIKEY}&name=${name}`);
      },
}
