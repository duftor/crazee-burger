import React from "react"
import styled from "styled-components"
import Logo from "../../reusable-ui/Logo"
import { BsPersonCircle } from "react-icons/bs"
import { Link } from "react-router-dom"

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

const NavbarStyled = styled.div`
	height: 98.19px; // 10% mais ne doit pas rétrécir donc on fixe
	box-sizing: border-box;
	background: #ffffff;
	border-radius: 15px 15px 0px 0px;

	.link {
		text-decoration: none;
	}

	.left {
		float: left;
		margin: 0 20px;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
	}

	.right {
		float: right;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;

		position: relative;
		top: 50%;
		transform: translateY(-50%);
		margin-right: 70px;

		.icon {
			font-size: 36px;
			color: #747b91;
			transform: translateY(10%);
		}

		.username {
			font-family: "Open Sans";
			font-size: 16px;
			line-height: 22px;
			color: #747b91;

			text-align: right;
			font-weight: 400;

			.hey-name {
				.username-primary {
					font-weight: 700;
					color: #ffa01b;
				}
			}

			.deconnection {
				font-size: 10px;
				line-height: 14px;
				color: #747b91;
			}
			.deconnection:hover {
				text-decoration: underline;
			}
		}
	}
`
