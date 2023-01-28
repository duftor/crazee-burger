import React from "react"
import styled from "styled-components"
import { theme } from "../../../theme/index"
import { fakeMenu1, fakeMenu2 } from "../../../data/fakeMenu"
import CardItem from "./CardItem"

export default function Main() {
	return (
		<MainStyled>
			{/* <div className="cart">CART</div> */}
			<div className="menu-items">
				{fakeMenu2.map((item) => (
					<CardItem item={item} />
				))}
			</div>
		</MainStyled>
	)
}
const MainStyled = styled.div`
	flex: 1;
	display: flex;
	overflow-y: scroll;

	.menu-items {
		width: 100%;
		margin: auto;
		display: grid;
		grid-template-columns: repeat(4, 25%);
		/* grid-template-rows: repeat(2, 50%); */

		padding: 20px 92.5px;
	}

	background: ${theme.colors.background_white};
	box-shadow: inset 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
	border-radius: 0px 0px ${theme.borderRadius.extraRound}
		${theme.borderRadius.extraRound};
`
