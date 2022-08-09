import axios from 'axios';
let config = require('../env-config.json');

const Api = axios.create(process.env.BASE_URL)

export default Api;