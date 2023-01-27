import React from "react"
import styled from "styled-components"
import Logo from "../../reusable-ui/Logo"
import { theme } from "../../../theme/index"
import NavbarRightSide from "./NavbarRightSide"

export default function Navbar({ username }) {
	const refreshPage = () => {
		window.location.reload(false)
	}

	return (
		<NavbarStyled>
			<div className="left" onClick={refreshPage}>
				<Logo />
			</div>
			<NavbarRightSide username={username} />
		</NavbarStyled>
	)
}

const NavbarStyled = styled.nav`
	height: 10vh;
	min-height: 50px;
	box-sizing: border-box;
	background: ${theme.colors.white};
	border-radius: ${theme.borderRadius.extraRound}
		${theme.borderRadius.extraRound} 0px 0px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	.link {
		text-decoration: none;
	}

	.left {
		margin: 0 20px;
		cursor: pointer;
	}
`
