import styled, { css } from "styled-components"
import { theme } from "../../theme/index"

export default function Button({
	label,
	Icon,
	className,
	onClick,
	variant = "normal",
}) {
	return (
		<ButtonStyled className={className} onClick={onClick} variant={variant}>
			<span>{label}</span>
			{Icon && Icon}
		</ButtonStyled>
	)
}

const ButtonStyled = styled.button`
	cursor: pointer;
	${({ variant }) => buttonStyle[variant]}
`

const normalStyle = css`
	width: 100%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	position: relative;
	white-space: nowrap;
	text-decoration: none;
	line-height: 1;

	padding: 18px 24px;
	border-radius: ${theme.borderRadius.round};
	font-size: ${theme.fonts.size.P0};
	font-weight: ${theme.fonts.weights.heavy};
	color: ${theme.colors.white};
	background-color: ${theme.colors.primary};
	border: 1px solid ${theme.colors.primary};

	&:hover:not(:disabled) {
		background-color: ${theme.colors.white};
		color: ${theme.colors.primary};
		border: 1px solid ${theme.colors.primary};
		transition: all 200ms ease-out;
	}

	&:active {
		color: ${theme.colors.white};
		background-color: #${theme.colors.primary};
		border: 1px solid #${theme.colors.primary};
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`

const successStyle = css`
	cursor: pointer;
	color: ${theme.colors.white};
	background: ${theme.colors.success};
	border: 1px solid ${theme.colors.success};
	border-radius: ${theme.borderRadius.round};
	height: 35px;
	padding: 0 1.5em;
	font-weight: ${theme.fonts.weights.bold};
	padding: 10px 30px;

	:hover {
		background: ${theme.colors.white};
		color: ${theme.colors.success};
		border: 1px solid ${theme.colors.success};
	}
	:active {
		color: ${theme.colors.white};
		background: ${theme.colors.success};
		border: 1px solid ${theme.colors.success};
	}
`

const buttonStyle = {
	normal: normalStyle,
	success: successStyle,
}
