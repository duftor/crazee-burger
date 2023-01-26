import React from "react"
import styled from "styled-components"
import Logo from "../../reusable-ui/Logo"

export default function Navbar() {
	return (
		<NavbarStyled>
			<div className="left">
				<Logo />
			</div>
			<div className="right">NAME</div>
		</NavbarStyled>
	)
}

const NavbarStyled = styled.div`
	height: 98.19px; // 10% mais ne doit pas rétrécir donc on fixe
	box-sizing: border-box;
	background: #ffffff;
	border-radius: 15px 15px 0px 0px;

	.left {
		float: left;
		margin: 0 20px;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}

	.right {
		float: right;
	}
`
