import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../theme/index"
import { BsPersonCircle } from "react-icons/bs"

export default function LoginForm() {
    // State
    const [name, setName] = useState("")
    const navigate = useNavigate()

    // Comportements
    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        navigate("order/" + name)
    }

    // Affichage
    return (
        <LoginFormStyled onSubmit={handleSumbit}>
            <h1>Bienvenue chez nous !</h1>
            <hr />
            <h2>Connectez-vous</h2>
            <div className="input-with-icon">
                <BsPersonCircle className="icon" />
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    placeholder="Entrez votre prénom"
                    onChange={handleChange}
                    required
                />
            </div>

            <input type="submit" value="Accéder à mon espace" />
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
	background: green;
	text-align: center;
	max-width: 500px;
	min-width: 400px;
	margin: 0 auto;
	padding: 2.5rem 2rem;
	border-radius: ${theme.borderRadius.round};
	font-family: "Amatic SC", cursive;

	hr {
		border: 1.5px solid #f56a2c;
		margin-bottom: 40px;
	}

	h1 {
		color: ${theme.colors.white};
		font-size: ${theme.fonts.P5};
	}

	h2 {
		color: ${theme.colors.white};
		margin: 20px 10px 10px;
		font-size: ${theme.fonts.P4};
	}

	.input-with-icon {
        background-color: white;
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;
        
        .icon {
            color: #93a2b1;
            font-size: 15px;
            margin-right: 8px;
        }

        input {
            border: none;
            font-size: 15px;
            color: #17161a;
        }

        &::placeholder {
            background: white;
            color: lightgrey;
        }
	}

`
