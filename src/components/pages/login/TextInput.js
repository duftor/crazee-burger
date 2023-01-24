import styled from "styled-components"

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
	return (
		<TextInputStyled>
			{Icon && Icon}
			<input type="text" value={value} onChange={onChange} {...extraProps} />
		</TextInputStyled>
	)
}

const TextInputStyled = styled.div`
	background-color: white;
	border-radius: 5px;
	display: flex;
	align-items: center;
	padding: 18px 24px;
	margin: 18px 0;

	.icon {
		color: #93a2b1;
		font-size: 15px;
		margin-right: 8px;
	}

	input {
		border: none;
		font-size: 15px;
		color: #17161a;
		width: 100%;
	}

	&::placeholder {
		background: white;
		color: lightgrey;
	}
`
