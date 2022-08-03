import { useState } from 'react';
import { Button, Field, Control, Input, Column, Help, Label} from "rbx";
import { Link, useNavigate } from "react-router-dom";
import UserServices from '../../../services/users';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    let navigate = useNavigate();

    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const login = await UserServices.login({email, password})
            navigate('/notes')
        } catch (error) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
    }


    return (
        <>
            <Column.Group centered>
                <form onSubmit={HandleSubmit}>
                    <Column size={12}>
                        <Field>
                            <Label size="small">Email:</Label>
                            <Control>
                                <Input
                                type="email"
                                required
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Password:</Label>
                            <Control>
                                <Input
                                type="password"
                                required
                                name="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group breakpoint="mobile">
                                    <Column>
                                        <Link to='/register' className="button is-white has-text-custom-purple">Register or</Link>
                                    </Column>
                                    <Column>
                                        <Button color="custom-purple" outlined>Login</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        { error && <Help color="danger">Email or Password invalid</Help> }
                    </Column>
                </form>
            </Column.Group>
        </>
    );
}
 
export default LoginForm;