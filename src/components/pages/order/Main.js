import React from "react"
import styled from "styled-components"
import { theme } from "../../../theme/index"

export default function Main() {
	return <MainStyled></MainStyled>
}
const MainStyled = styled.div`
	flex: 1;

	background: ${theme.colors.background_white};
	box-shadow: inset 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
	border-radius: 0px 0px ${theme.borderRadius.extraRound}
		${theme.borderRadius.extraRound};
`
