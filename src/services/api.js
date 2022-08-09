import axios from 'axios';

const Api = axios.create({baseURL: 'https://clone-evernote-api-tupis.herokuapp.com/'})

export default Api;