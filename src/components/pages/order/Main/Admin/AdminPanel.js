import React, { useContext } from "react"
import styled from "styled-components"
import AdminContext from "../../../../../context/AdminContext"
import Tabs from "./AdminTabs"
import { theme } from "../../../../../theme/index"
import { getTabsConfig } from "./getTabsConfig"

export default function AdminPanel() {
	const { currentTabSelected } = useContext(AdminContext)

	const tabs = getTabsConfig(currentTabSelected)
	const tabSelected = tabs.find((tab) => tab.index === currentTabSelected)

	return (
		<AdminPanelStyled className="panel-admin">
			{currentTabSelected === tabSelected.index && tabSelected.label}
		</AdminPanelStyled>
	)
}

const AdminPanelStyled = styled.div`
	height: 251px;
	border-bottom-left-radius: ${theme.borderRadius.extraRound};
	border-bottom-right-radius: ${theme.borderRadius.extraRound};

	background: ${theme.colors.white};
	border-top: 1px solid ${theme.colors.greyLight};
	box-shadow: ${theme.shadows.subtle};
`
