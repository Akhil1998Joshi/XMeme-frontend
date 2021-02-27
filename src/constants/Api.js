import axios from 'axios';

const BASE_URL = "https://xmeme-postgres-backend.herokuapp.com/";

class Api {
    showAllMemes() {
        return axios.get(BASE_URL + '/memes');
    }
    showMemeById(id) {
        return axios.get(BASE_URL + '/memes/' + id);
    }
    createMeme(meme) {
        return axios.post(BASE_URL + '/memes', meme);
    }
    updateMeme(meme, id) {
        return axios.patch(BASE_URL + '/memes/' + id, meme);
    }

}

export default new Api();