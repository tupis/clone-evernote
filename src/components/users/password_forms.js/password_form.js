import { Control, Field, Input, Label, Help, Column, Button } from "rbx";
import { useState } from "react";
import UserServices from "../../../services/users";

const PasswordEditor = () => {
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [status, setStatus] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(password === passwordConfirmation){
            try {
                await UserServices.updatePassword({password})
                setStatus('success')
            } catch (error) {
                setStatus('error_update')
            }
        } else {
            setStatus('error_confirmation')
        }
        
        setTimeout(() => {
            setStatus(null)
        }, 3000)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Field>
                    <Control>
                        <Label className='has-text-grey'>Password</Label>
                        <Input 
                            type='text'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            name='password'
                        />
                    </Control>
                </Field>


                <Field>
                    <Control>
                        <Label className='has-text-grey'>Password Confirmation</Label>
                        <Input 
                            type='text'
                            value={passwordConfirmation}
                            onChange={e => setPasswordConfirmation(e.target.value)}
                            required
                            name='passwordConfirmation'
                        />
                    </Control>
                </Field>


                <Field>
                    <Control>
                        <Column.Group>
                            <Column className='has-text-grey'>
                                <Button color='custom-purple'>Update Password</Button>
                            </Column>
                        </Column.Group>
                    </Control>
                </Field>
                {status === 'success' &&
                    <Help color='primary'>Password updated</Help>
                }
                {status === 'error_confirmation' && 
                    <Help color='danger'>Password don't match</Help>
                }
                {status === 'error_update' &&
                    <Help color='danger' >Problem in password update</Help>
                }
            </form>
        </>
    );
}
 
export default PasswordEditor;