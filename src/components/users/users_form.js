import { useState, useEffect } from 'react';
import { Button, Field, Control, Input, Column, Help, Label } from "rbx";
import UserServices from '../../services/users';

const UsersEditForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState(null);

    const initializeUser = async () => {
        const user = await JSON.parse(localStorage.getItem('user'));
        setEmail(user.email);
        setName(user.name);
    }

    useEffect(() =>{
        initializeUser()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await UserServices.update({ email, name });
            setStatus("success")
            window.location.reload()
        } catch (err) {
            setStatus("error")
        }
        setTimeout(()=>{
            setStatus(null)
        }, 3000)
    }

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <Field>
                    <Control>
                        <Label className='has-text-grey'>Full Name</Label>
                        <Input 
                            type="name"
                            value={name || ""}
                            onChange={e => setName(e.target.value)}
                            required
                            name='name'
                        />
                    </Control>
                </Field>


                <Field>
                    <Control>
                        <Label className='has-text-grey'>Email</Label>
                        <Input
                            type='email'
                            name='email'
                            value={email || ''}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </Control>
                </Field>


                <Field>
                    <Control>
                        <Column.Group>
                            <Column className='has-text-rigth'>
                                <Button color='custom-purple' outlined>Update</Button>
                            </Column>
                        </Column.Group>
                    </Control>
                </Field>
                {status === 'success' &&
                    <Help color='primary'>Updated with success</Help>
                }
                {status === 'error' &&
                    <Help color='danger'>Failed to update</Help>
                }
            </form>
        </>
    )
}


export default UsersEditForm;