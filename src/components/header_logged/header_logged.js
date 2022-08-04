import { useState } from 'react';
import { Navbar, Container, Column, Button, Dropdown } from 'rbx';
import logoImage from '../../assets/images/logo-branca.png';
import '../../styles/header.scss';
import UserServices from '../../services/users';
import { Navigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const HeaderLogged = (props) => {
    const [redirectToHome, setRedirectToHome] = useState(false);

    const logOut = async () => {
        await UserService.logout();
        setRedirectToHome(true);
    }

    if (redirectToHome == true){
        return <Navigate to='/' />
    }

    return (
        <Navbar color="custom-purple" className="navbar-logged">
        <Navbar.Brand>
            <Column.Group>
                <Column size="11" offset="1">
                    <Link to="/notes">
                        <img src={logoImage} onClick={() => setRedirectToHome(true)}/>
                    </Link>
                </Column>
            </Column.Group>
        </Navbar.Brand>

        <Navbar.Menu>
            <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                <Navbar.Item as="div">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <Button className="button" color="white" outlined>
                                <span>Leonardo ▼</span>
                            </Button>
                        </Dropdown.Trigger>
                            <Dropdown.Menu>
                                <Dropdown.Content>
                                    <Dropdown.Item as="div">
                                        <Link to="/users/edit">User Edit</Link>
                                    </Dropdown.Item>

                                    <Dropdown.Divider />

                                    <Dropdown.Item as="div">
                                        <a href="#" onClick={e => logOut()}>LogOut</a>
                                    </Dropdown.Item>
                                </Dropdown.Content>
                            </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Item>
            </Navbar.Segment>
        </Navbar.Menu>
        </Navbar>
    )
}

export default HeaderLogged;