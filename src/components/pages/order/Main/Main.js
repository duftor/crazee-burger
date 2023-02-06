import React from "react"
import styled from "styled-components"
import { theme } from "../../../../theme/index"
import AdminPanel from "./AdminPanel"
import Menu from "./Menu"

export default function Main() {
	return (
		<MainStyled>
			{/* <div className="cart">CART</div> */}
			<Menu />
			<AdminPanel />
		</MainStyled>
	)
}
const MainStyled = styled.div`
	background: ${theme.colors.background_white};
	flex: 1;

	display: grid;
	/* grid-template-columns: 25% 1fr; */
	grid-template-columns: 1fr;
	overflow-y: scroll;

	border-bottom-left-radius: ${theme.borderRadius.extraRound};
	border-bottom-right-radius: ${theme.borderRadius.extraRound};
	box-shadow: inset 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
`
