import React from "react"
import styled from "styled-components"

export default function Main() {
	return <MainStyled></MainStyled>
}
const MainStyled = styled.div`
	height: 90%;
	box-sizing: border-box;

	background: #f5f5f7;
	box-shadow: inset 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
	border-radius: 0px 0px 15px 15px;
`
