import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => (
    localStorage.getItem('user') ? <Outlet /> : <Navigate to='/' />
)
 
export default PrivateRoute;