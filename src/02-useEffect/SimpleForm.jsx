import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'nico',
        email: 'nicodevelo@gmail.com',
    });


    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name , value } = target;
        setFormState({
        ...formState,
        [ name ]: value
        });
    }

    useEffect(() => {
        // console.log('useEffect called')
    }, []); //arreglo vacío indica que el useEffect se va a llamar una vez
    
    useEffect(() => {
        // console.log('Form state changed')
    }, [ formState ]); 

    useEffect(() => {
        // console.log('email changed')
    }, [ email ]);

    return (
    <> 
    <h1>Formulario</h1>
    <hr />

    <input 
    type="text" 
    className="form-control" 
    placeholder="Username" 
    name="username"
    value= { username }
    onChange={ onInputChange }
    />
    <input 
    type="email" 
    className="form-control mt-2" 
    placeholder="nicodevelo@gmail.com" 
    name="email"
    value= { email }
    onChange={ onInputChange }
    />

    {
        ( username === 'nico2') && <Message />
    }

    </>
    )
}
