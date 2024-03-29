import React, { useContext } from "react"
import styled from "styled-components"
import AdminContext from "../../../../../../../context/AdminContext"
import { theme } from "../../../../../../../theme/index"
import { getTabSelected, tabsConfig } from "../tabsConfig"

export default function AdminPanel() {
	const { currentTabSelected } = useContext(AdminContext)

	const tabs = tabsConfig
	const tabSelectedInfo = getTabSelected(tabs, currentTabSelected)

	return <AdminPanelStyled>{tabSelectedInfo.Content}</AdminPanelStyled>
}

const AdminPanelStyled = styled.div`
	height: 251px;
	border-bottom-left-radius: ${theme.borderRadius.extraRound};
	border-bottom-right-radius: ${theme.borderRadius.extraRound};

	background: ${theme.colors.white};
	border-top: 1px solid ${theme.colors.greyLight};
	box-shadow: ${theme.shadows.subtle};
`
