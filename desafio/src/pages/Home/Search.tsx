import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {GlobalStyle, Container, Title, Form} from './styleSearch';

interface Username{
    username : string;
}

export function Search(){
    const [username, setUsername]= useState <Username | null> ();
    const navigate = useNavigate();


    function handleUsername(e: any){
        setUsername(e.target.value)
    }

    function handleSubmit(e: any){
        e.preventDefault();
        navigate('/profile/'+username)
    }

    username 
        ?document.querySelector('button')?.removeAttribute('disabled') 
        : document.querySelector('button')?.setAttribute('disabled', 'disabled');

    return(
        <>
        <GlobalStyle/>
        <Container>
            <Title> Search Devs </Title>
            <Form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Type the username here..."
                    onChange={handleUsername}
                />
                <button type="submit" disabled> Buscar </button>
            </Form>
        </Container>
        </>
    )
}