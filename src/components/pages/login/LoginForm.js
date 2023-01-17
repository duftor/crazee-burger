import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function LoginForm() {
    // State
    const [name, setName] = useState("")
    const navigate = useNavigate()


    // Comportements
    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSumbit = (e) => {
        navigate("order/" + name)
        e.preventDefault();
    }

    // Affichage
    return (
        <form onSubmit={handleSumbit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="Entrez votre prénom..."
                onChange={handleChange}
                required
            />

            <input type="submit" value="Accédez à votre espace" />
        </form>
    )
}
