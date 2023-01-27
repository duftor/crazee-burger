import { Link } from "react-router-dom"
import { BsPersonCircle } from "react-icons/bs"
import { theme } from "../../../theme/index"
import styled from "styled-components"

export default function NavbarRightSide({ username }) {
	return (
		<NavbarRightSideStyled>
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
		</NavbarRightSideStyled>
	)
}

const NavbarRightSideStyled = styled.div`
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
`
