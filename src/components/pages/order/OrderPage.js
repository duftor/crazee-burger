import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import Main from "./Main"
import Navbar from "./Navbar"
import { theme } from "../../../theme/index"

// Without Vi
export default function OrderPage() {
	// State
	const { username } = useParams()

	// Comportements

	// Affichage
	return (
		<OrderPageStyled>
			<div className="container">
				<Navbar
					username={username}
					link={
						<Link to="/">
							<button>Déconnexion</button>
						</Link>
					}
				/>
				<Main />
			</div>
		</OrderPageStyled>
	)
}

const OrderPageStyled = styled.div`
	background-color: ${theme.colors.primary};
	width: 100%;
	height: 100vh;
	position: absolute;

	.container {
		min-width: 1000px;
		max-width: 1400px;

		height: 95vh;
		min-height: 450px;
		margin: 2.5vh auto;
	}
`
