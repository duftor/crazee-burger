import React, { useContext } from "react"
import styled from "styled-components"
import AdminContext from "../../../../../../context/AdminContext"
import { theme } from "../../../../../../theme/index"
import Tab from "../../../../../reusable-ui/Tab"
import { tabsConfig } from "./tabsConfig"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

export default function AdminTabs() {
	const {
		isCollapsed,
		setIsCollapsed,
		currentTabSelected,
		setCurrentTabSelected,
	} = useContext(AdminContext)

	const selectTab = (tabSelected) => {
		setCurrentTabSelected(tabSelected)
		setIsCollapsed(false)
	}

	const tabs = tabsConfig

	return (
		<AdminTabsStyled>
			<Tab
				onClick={() => setIsCollapsed(!isCollapsed)}
				Icon={!isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
				className={isCollapsed && "is-active"}
			/>
			{tabs.map((tab) => {
				return (
					<Tab
						key={tab.index}
						label={tab.label}
						Icon={tab.Icon}
						onClick={() => selectTab(tab.index)}
						className={currentTabSelected === tab.index && "is-active"}
					/>
				)
			})}
		</AdminTabsStyled>
	)
}

const AdminTabsStyled = styled.div`
	display: flex;

	.is-active {
		background-color: ${theme.colors.background_dark};
		border-color: ${theme.colors.background_dark};
		color: ${theme.colors.white};
		border-width: 1px 1px 2px 1px;
		border-style: solid;
	}
`
