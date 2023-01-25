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
				placeholder="Entrez votre prénom"
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
	padding: 2.5rem ${theme.spacing.lg};
	border-radius: ${theme.borderRadius.round};
	font-family: "Amatic SC", cursive;

	hr {
		border: 1.5px solid ${theme.colors.loginLine};
		margin-bottom: ${theme.gridUnit * 5}px;
	}

	h1 {
		color: ${theme.colors.white};
		font-size: ${theme.fonts.size.P5};
	}

	h2 {
		color: ${theme.colors.white};
		margin: 20px 10px 10px;
		font-size: ${theme.fonts.size.P4};
	}

	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: ${theme.fonts.size.P0};
		margin-left: 10px;
	}
`
