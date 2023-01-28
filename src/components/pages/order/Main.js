import React from "react"
import styled from "styled-components"
import { theme } from "../../../theme/index"

export default function Main() {
	return (
		<MainStyled>
			{/* <div className="cart">CART</div> */}
			<div className="menu-items">
				<div className="card">CARD 1</div>
				<div className="card">
					<img src="/images/burger1.png" alt="Burger TITRE" />
					<h1>Burger TITRE</h1>
					<div className="bottom-info">
						<div className="price">5,60€</div>
						<button>Ajouter</button>
					</div>
				</div>
				<div className="card">CARD 3</div>
				<div className="card">CARD 4</div>
				<div className="card">CARD 5</div>
				<div className="card">CARD 6</div>
				<div className="card">CARD 7</div>
				<div className="card">CARD 8</div>
				<div className="card">CARD 9</div>
				<div className="card">CARD 10</div>
			</div>
		</MainStyled>
	)
}
const MainStyled = styled.div`
	flex: 1;

	display: flex;

	.menu-items {
		width: 100%;
		margin: auto;
		display: grid;
		grid-template-columns: repeat(4, 25%);
		/* grid-template-rows: repeat(2, 50%); */

		padding: 35px 92.5px;

		.card {
			border: 1px solid red;
			height: 330px;
			width: 240px;
			margin: 15px auto;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			img {
				width: 100%;
			}

			.bottom-info {
				width: 100%;
				display: flex;
				justify-content: space-between;
			}
		}
	}

	background: ${theme.colors.background_white};
	box-shadow: inset 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
	border-radius: 0px 0px ${theme.borderRadius.extraRound}
		${theme.borderRadius.extraRound};
`
