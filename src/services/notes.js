import Api from './api'

const headers = {'x-access-token': localStorage.getItem('token')}

const NotesServices = {

    index: () => Api.get('/notes', { headers }),
    create: (title, body) => Api.post('/notes', {'title': title, 'body': body}, { headers }),
    delete: (id) => Api.delete(`/notes/${id}`, { headers }),
    update: (id, params) => Api.put(`/notes/${id}`, params, { headers }),
    search: (query) => Api.get(`/notes/search?query=${query}`, { headers })
}
 
export default NotesServices;