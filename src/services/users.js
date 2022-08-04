import Api from './api';

const UserServices = {
    register: (params) => Api.post('/users/register', params),
    login: async (params) => {
        const response = await Api.post('/users/login', params);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', JSON.stringify(response.data.token))
    }
};

export default UserServices;