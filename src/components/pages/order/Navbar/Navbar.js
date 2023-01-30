import React from "react"
import styled from "styled-components"
import Logo from "../../../reusable-ui/Logo"
import { theme } from "../../../../theme/index"
import NavbarRightSide from "./NavbarRightSide"
import { refreshPage } from "../../../../utils/window"

export default function Navbar() {
	return (
		<NavbarStyled>
			<Logo onClick={refreshPage} className="navbar-left-side" />
			<NavbarRightSide />
		</NavbarStyled>
	)
}

const NavbarStyled = styled.nav`
	height: 10vh;
	min-height: 50px;
	box-sizing: border-box;
	background: ${theme.colors.white};
	border-bottom: 1px solid #e4e5e9;
	border-radius: ${theme.borderRadius.extraRound}
		${theme.borderRadius.extraRound} 0px 0px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding-left: 20px;
	padding-right: 70px;

	.navbar-left-side {
		cursor: pointer;
	}
`
