import React from "react"
import styled from "styled-components"
import { theme } from "../../../../../../../theme/index"
import { FiCheck } from "react-icons/fi"

export default function SubmitMessage() {
	return (
		<SubmitMessageStyled>
			<FiCheck className="icon" />
			Ajouté avec succès !
		</SubmitMessageStyled>
	)
}

const SubmitMessageStyled = styled.span`
	padding-left: 5px;
	margin-left: 10px;

	color: ${theme.colors.success};
	gap: 5px;

	font-family: ${theme.fonts.family.tertiary};
	font-weight: ${theme.fonts.weights.regular};
	font-size: ${theme.fonts.size.P0};
	line-height: 20px;
	display: flex;
	align-items: center;

	.icon {
		width: 18px;
		height: 18px;
	}
`
