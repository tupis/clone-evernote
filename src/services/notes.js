import Api from './api'

const NotesServices = {

    index: () => Api.get('/notes', {
        headers: {'x-access-token': localStorage.getItem('token')}
    })

}
 
export default NotesServices;