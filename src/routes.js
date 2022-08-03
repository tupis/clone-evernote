import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from './screens/home/home';
import RegisterScreen from './screens/auth/register/register';
import LoginScreen from './screens/auth/login/login';
import NotesIndexScreen from './screens/notes/notes';
import UserEditScreen from './screens/users/edit/edit';
import PrivateRoute from "./components/auth/privateRoute/privateRoute";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <HomeScreen/> } />
            <Route exact path="/register" element={ <RegisterScreen/> } />
            <Route exact path="/login" element={ <LoginScreen/> } />
            <Route element={<PrivateRoute />}>
                <Route exact path="/notes" element={ <NotesIndexScreen/> } />
                <Route exact path="/user/edit" element={ <UserEditScreen/> } />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router;