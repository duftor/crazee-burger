import React from "react"
import styled from "styled-components"
import { theme } from "../../../../theme/index"

import MainRightSide from "./MainRightSide/MainRightSide"

export default function Main() {
	return (
		<MainStyled>
			{/* <div className="cart">CART</div> */}
			<MainRightSide />
		</MainStyled>
	)
}
const MainStyled = styled.div`
	background: ${theme.colors.background_white};
	flex: 1;
	position: relative;
	display: grid;
	grid-template-columns: 1fr;

	border-bottom-left-radius: ${theme.borderRadius.extraRound};
	border-bottom-right-radius: ${theme.borderRadius.extraRound};

	.basket {
		background: pink;
		border: 1px solid black;
	}
`
