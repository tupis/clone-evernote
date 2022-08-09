import axios from 'axios';

const Api = axios.create(process.env.BASE_URL)

export default Api;