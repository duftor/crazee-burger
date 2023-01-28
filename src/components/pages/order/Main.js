import React from "react"
import styled from "styled-components"
import { theme } from "../../../theme/index"
import { fakeMenu1, fakeMenu2 } from "../../../data/fakeMenu"

export default function Main() {
	return (
		<MainStyled>
			{/* <div className="cart">CART</div> */}
			<div className="menu-items">
				{fakeMenu2.map((item) => (
					<div className="card" key={item.id + item.imageSource + item.price}>
						<img src={item.imageSource} alt={item.title} />
						<h1>{item.title}</h1>
						<div className="bottom-info">
							<div className="price">{item.price}</div>
							<button>Ajouter</button>
						</div>
					</div>
				))}
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
				overflow: hidden;
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
