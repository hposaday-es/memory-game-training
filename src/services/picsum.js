import axios from 'axios'
import SHARED from './../constants/shared';

const URL = SHARED.PICSUM.URL

const getImages = () => {

    const ENDPOINT = '/list'
    return axios.get(`${URL}${ENDPOINT}`)
}

const picsum = {
    getImages
}

export default picsum

