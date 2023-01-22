import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


export default function LoginForm() {
    // State
    const [name, setName] = useState("")
    const navigate = useNavigate()


    // Comportements
    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        navigate("order/" + name)
    }

    // Affichage
    return (
        <LoginFormStyled onSubmit={handleSumbit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="Entrez votre prénom"
                onChange={handleChange}
                required
            />

            <input type="submit" value="Accéder à mon espace" />
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
   background: green;
   
`;