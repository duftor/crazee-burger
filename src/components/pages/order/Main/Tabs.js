import React, { useContext } from "react"
import styled from "styled-components"
import AdminContext from "../../../../context/AdminContext"
import { theme } from "../../../../theme/index"
import Tab from "./Tab"
import { getTabsConfig } from "./Admin/tabsConfig"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

export default function Tabs() {
	const {
		isPanelVisible,
		setIsPanelVisible,
		currentTabSelected,
		setCurrentTabSelected,
	} = useContext(AdminContext)

	const toggleAdminPanel = () => {
		setIsPanelVisible(!isPanelVisible)
	}

	const selectTab = (tabSelected) => {
		setCurrentTabSelected(tabSelected)
		setIsPanelVisible(true)
	}

	const tabs = getTabsConfig(currentTabSelected)

	return (
		<TabsStyled>
			<Tab
				onClick={toggleAdminPanel}
				isSelected={!isPanelVisible}
				Icon={isPanelVisible ? <FiChevronDown /> : <FiChevronUp />}
				className={!isPanelVisible && "is-active"}
			/>
			{tabs.map((tab) => {
				return (
					<Tab
						key={tab.index}
						label={tab.label}
						Icon={tab.Icon}
						onClick={() => selectTab(tab.index)}
						className={currentTabSelected === tab.index ? "is-active" : ""}
					/>
				)
			})}
		</TabsStyled>
	)
}

const TabsStyled = styled.div`
	margin-left: 71px;
	display: flex;
	height: 42px;

	.icon {
		width: 16px;
		height: 16px;
		padding-right: 13px;
	}

	.is-active {
		background-color: ${theme.colors.background_dark};
		border-color: ${theme.colors.background_dark};
		color: white;
	}
	.is-active:hover {
		border-bottom-color: ${theme.colors.background_dark};
	}
`
