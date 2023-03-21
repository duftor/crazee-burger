import styled, { css } from "styled-components"
import { theme } from "../../theme/index"

export default function TextInput({
	value,
	onChange,
	Icon,
	variant = "normal",
	className,
	...extraProps
}) {
	return (
		<TextInputStyled className={className} variant={variant}>
			{Icon && <div className="icon">{Icon}</div>}
			<input type="text" value={value} onChange={onChange} {...extraProps} />
		</TextInputStyled>
	)
}

const TextInputStyled = styled.div`
	border-radius: ${theme.borderRadius.round};
	display: flex;
	align-items: center;

	.icon {
		font-size: ${theme.fonts.size.SM};
		margin: 0 13px 0 8px;
		display: flex; // to center icon vertically
	}

	input {
		border: none;
		font-size: ${theme.fonts.size.SM};
		width: 100%;

		&::placeholder {
			color: ${theme.colors.greyMedium};
		}
	}

	${({ variant }) => extraStyle[variant]}
`

const normalStyle = css`
	background-color: ${theme.colors.white};
	padding: 18px 28px;
	color: ${theme.colors.greySemiDark};

	input {
		color: ${theme.colors.dark};

		&::placeholder {
			background: ${theme.colors.white};
		}
	}
`

const minimalistStyle = css`
	background-color: ${theme.colors.background_white};
	padding: 8px 16px;
	color: ${theme.colors.greyBlue};
	box-sizing: border-box;
	height: 35px;
	width: 100%;

	.icon {
		/* font-size: ${theme.fonts.size.SM}; */
		/* margin: 0 0 0 8px; */
	}

	input {
		background: ${theme.colors.background_white};
		color: ${theme.colors.dark};
		/* width: 100%; */

		/* &::placeholder {
			color: ${theme.colors.greyMedium};
		} */

		&:focus {
			outline: 0; //// add outline
		}
	}
`

const extraStyle = {
	normal: normalStyle,
	minimalist: minimalistStyle,
}
