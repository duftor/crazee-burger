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
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	.container {
		width: 1400px;
		height: 95vh;

		display: flex;
		flex-direction: column;
	}
`
