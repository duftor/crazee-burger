import React from "react"
import styled from "styled-components"

export default function Main() {
	return <MainStyled>MAIN</MainStyled>
}
const MainStyled = styled.div`
	border: 2px solid red;
	height: 90%;
	box-sizing: border-box;
	box-shadow: inset 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
	border-radius: 0px 0px 15px 15px;
`
