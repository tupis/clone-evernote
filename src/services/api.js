import axios from 'axios';
let config = require('../env-config.json');

const Api = axios.create({baseURL: config.baseURL})

export default Api;