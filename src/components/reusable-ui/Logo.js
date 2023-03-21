import styled from "styled-components"
import { theme } from "../../theme/index"

export default function Logo({ className, onClick }) {
	return (
		<LogoStyled className={className} onClick={onClick}>
			<h1>CRAZEE</h1>
			<img src="/images/logo_orange.png" alt="Crazy Burger logo" />
			<h1>BURGER</h1>
		</LogoStyled>
	)
}

const LogoStyled = styled.div`
	display: flex;
	align-items: center;

	h1 {
		display: inline;
		text-align: center;
		color: ${theme.colors.primary};
		font-size: ${theme.fonts.size.P4};
		line-height: 1em;
		font-weight: ${theme.fonts.weights.bold};
		text-transform: uppercase;
		letter-spacing: 1.5px;
		font-family: ${theme.fonts.family.primary}, cursive;
	}

	img {
		object-fit: contain;
		object-position: center;
		height: 60px;
		width: 80px; // For Safari and Firefox
		margin: 0 ${theme.gridUnit / 2}px;
	}
`
