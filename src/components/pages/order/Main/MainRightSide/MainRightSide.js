import React from "react"
import { useContext } from "react"
import styled from "styled-components"
import AdminContext from "../../../../../context/AdminContext"
import Admin from "./Admin/Admin"
import Menu from "./Menu/Menu"

export default function MainRightSide() {
	const { isAdminMode } = useContext(AdminContext)

	return (
		<MainRightSideStyled>
			<Menu />
			{isAdminMode && <Admin />}
		</MainRightSideStyled>
	)
}

const MainRightSideStyled = styled.div`
	position: relative;
	display: flex;
	overflow-y: hidden;
	height: calc(85vh);
`
