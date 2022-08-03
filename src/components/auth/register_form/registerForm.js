import { useState } from 'react';
import { Button, Field, Control, Input, Column, Help, Label } from "rbx";
import { Link, useNavigate } from "react-router-dom";
import UserServices from '../../../services/users';

function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await UserServices.register({ name, email, password })
            navigate('/login')
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
                        <Label size="small">Name:</Label>
                        <Control>
                            <Input
                            type="name"
                            required
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                        </Control>
                    </Field>
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
                                    <Link to='/login' className="button is-white has-text-custom-purple">Login or</Link>
                                </Column>
                                <Column>
                                    <Button color="custom-purple" outlined>Register</Button>
                                </Column>
                            </Column.Group>
                        </Control>
                    </Field>
                    {error && <Help color="danger">Email or Password invalid</Help>}
                </Column>
            </form>
        </Column.Group>
    </>
  )
}

export default RegisterForm;