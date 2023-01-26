import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import Main from "./Main"
import Navbar from "./Navbar"

export default function OrderPage() {
	// State
	const { username } = useParams()

	// Comportements

	// Affichage
	return (
		<OrderPageStyled>
			<Navbar
				username={username}
				link={
					<Link to="/">
						<button>Déconnexion</button>
					</Link>
				}
			/>
			<Main />
		</OrderPageStyled>
	)
}

const OrderPageStyled = styled.div`
	background-color: #ffa01b;
	width: 100%;
	height: 100vh;
	position: absolute;
`
