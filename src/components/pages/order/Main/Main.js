import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "../../../../theme/index"

import Menu from "./Menu"

export default function Main() {
	return (
		<MainStyled>
			{/* <div className="cart">CART</div> */}
			<Menu />
		</MainStyled>
	)
}
const MainStyled = styled.div`
	flex: 1;

	display: grid;
	/* grid-template-columns: 25% 1fr; */
	grid-template-columns: 1fr;
	overflow-y: scroll;

	.cart {
		border: 1px solid red;
	}

	border-radius: 0px 0px ${theme.borderRadius.extraRound}
		${theme.borderRadius.extraRound};
`
