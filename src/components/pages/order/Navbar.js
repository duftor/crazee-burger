import React from "react"
import styled from "styled-components"
import Logo from "../../reusable-ui/Logo"

export default function Navbar() {
	return (
		<NavbarStyled>
			<div className="left">LEFT</div>
			<div className="right">RIGHT</div>
		</NavbarStyled>
	)
}

const NavbarStyled = styled.div`
	border: 2px solid rgb(34, 177, 76);
	height: 10%;
	box-sizing: border-box;

	.left {
		border: 2px solid rgb(63, 72, 204);
	}

	.right {
		border: 2px solid rgb(63, 72, 204);
	}
`
