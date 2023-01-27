import React from "react"
import styled from "styled-components"
import Logo from "../../reusable-ui/Logo"
import { BsPersonCircle } from "react-icons/bs"
import { Link } from "react-router-dom"
import { theme } from "../../../theme/index"

export default function Navbar({ username }) {
	const refreshPage = () => {
		window.location.reload(false)
	}

	return (
		<NavbarStyled>
			<div className="left" onClick={refreshPage}>
				<Logo />
			</div>
			<div className="right">
				<div className="username">
					<div className="hey-name">
						<span>Hey, </span>
						<span className="username-primary">{username}</span>
					</div>

					<Link to="/" className="link deconnection">
						Se déconnecter
					</Link>
				</div>
				<div className="icon">
					<BsPersonCircle />
				</div>
			</div>
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

	.right {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
		margin-right: 70px;

		.icon {
			font-size: ${theme.fonts.size.P4};
			color: ${theme.colors.greyBlue};
			transform: translateY(10%);
		}

		.username {
			font-family: "Open Sans";
			font-size: 16px;
			line-height: 22px;
			color: ${theme.colors.greyBlue};

			text-align: right;
			font-weight: ${theme.fonts.weights.regular};

			.hey-name {
				.username-primary {
					font-weight: ${theme.fonts.weights.bold};
					color: ${theme.colors.primary};
				}
			}

			.deconnection {
				font-size: ${theme.fonts.size.XXS};
				line-height: 14px;
				color: #${theme.colors.greyBlue};
			}
			.deconnection:hover {
				text-decoration: underline;
			}
		}
	}
`
