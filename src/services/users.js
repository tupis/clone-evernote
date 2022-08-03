import Api from './api';

const UserServices = {
    register: (params) => Api.post('/users/register', params),
    login: (params) => Api.post('/users/login', params)
};

export default UserServices;