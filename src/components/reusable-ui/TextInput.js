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

	${({ variant }) => extraStyle[variant]}
`

const normalStyle = css`
	background-color: ${theme.colors.white};
	padding: 18px 28px;
	color: ${theme.colors.greySemiDark};

	.icon {
		font-size: ${theme.fonts.size.SM};
		margin: 0 13px 0 8px;
	}

	input {
		border: none;
		font-size: ${theme.fonts.size.SM};
		color: ${theme.colors.dark};
		width: 100%;

		&::placeholder {
			background: ${theme.colors.white};
			color: ${theme.colors.greyMedium};
		}
	}
`

const minimalistStyle = css`
	display: flex;
	flex-direction: row;
	align-items: center;

	padding: 8px 16px 8px 24px;

	background: ${theme.colors.background_white};
	border-radius: ${theme.borderRadius.round};

	.icon {
		width: 15px;
		height: 13px;
		padding-right: 15px;
	}

	input {
		padding: 1px 2px;
		background-color: ${theme.colors.background_white};
		border: none;
		width: 100%;

		color: ${theme.colors.dark};
		font-size: ${theme.fonts.size.P0};
	}

	input::placeholder {
		color: ${theme.colors.greyMedium};
	}
`

const extraStyle = {
	normal: normalStyle,
	minimalist: minimalistStyle,
}
