import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme/index"
import { IoChevronForward } from "react-icons/io5"
import TextInput from "../../reusable-ui/TextInput"
import { BsPersonCircle } from "react-icons/bs"
import PrimaryButton from "../../reusable-ui/PrimaryButton"

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

			<TextInput
				value={name}
				onChange={handleChange}
				placeHolder="Entrez votre prénom"
				Icon={<BsPersonCircle className="icon" />}
				required
			/>

			<PrimaryButton
				label="Accéder à mon espace"
				Icon={<IoChevronForward className="icon" />}
			/>
		</LoginFormStyled>
	)
}

const LoginFormStyled = styled.form`
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

	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 15px;
		margin-left: 10px;
	}
`
