import UserServices from "../../../services/users";
import { Navigate } from "react-router-dom";
import { useState } from "react"
import { Button } from 'rbx'

const DeleteButton = () => {
    const [redirect, setRedirect] = useState(null)

    const deleteUser = async () => {
        if(window.confirm("Tem certeza que deseja excluir sua conta ?")){
            await UserServices.delete();
            setRedirect(true)
        }
    }

    if(redirect === true) {
        return <Navigate to='/' />
    }
    
    return (
        <>
            <Button color="danger" onClick={() => deleteUser()}>
                Excluir conta
            </Button>
        </>
    );
}
 
export default DeleteButton;