import React, { useContext } from "react"
import styled from "styled-components"
import AdminContext from "../../../../context/AdminContext"
import { theme } from "../../../../theme/index"
import Admin from "./Admin/Admin"
import Menu from "./Menu"

export default function Main() {
	const { isAdminMode } = useContext(AdminContext)

	return (
		<MainStyled>
			{/* <div className="cart">CART</div> */}
			<div className="menu-and-admin">
				<Menu />
				{isAdminMode && <Admin />}
			</div>
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

	.menu-and-admin {
		position: relative;
		display: flex;
		overflow-y: hidden;
		height: calc(85vh);
	}
`
