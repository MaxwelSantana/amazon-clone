import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-3842b.cloudfunctions.net/api',
    // baseURL: 'http://localhost:5001/clone-3842b/us-central1/api',
});

export default instance;

// https://us-central1-clone-3842b.cloudfunctions.net/api
