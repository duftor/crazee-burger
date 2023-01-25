import styled from "styled-components"
import { theme } from "../../theme/index"

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
	return (
		<TextInputStyled>
			{Icon && Icon}
			<input type="text" value={value} onChange={onChange} {...extraProps} />
		</TextInputStyled>
	)
}

const TextInputStyled = styled.div`
	background-color: ${theme.colors.white};
	border-radius: ${theme.borderRadius.round};
	display: flex;
	align-items: center;
	padding: 18px 24px;
	margin: 18px 0;

	.icon {
		color: ${theme.colors.greySemiDark};
		font-size: ${theme.fonts.size.P0};
		margin-right: 8px;
	}

	input {
		border: none;
		font-size: ${theme.fonts.size.P0};
		color: #${theme.colors.dark};
		width: 100%;

		&::placeholder {
			background: ${theme.colors.white};
			color: ${theme.colors.greyMedium};
		}
	}
`
