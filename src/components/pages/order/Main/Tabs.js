import React, { useContext } from "react"
import styled from "styled-components"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import AdminContext from "../../../../context/AdminContext"
import { theme } from "../../../../theme/index"
import Tab from "./Tab"

export default function Tabs() {
	const { isPanelVisible, setIsPanelVisible, tabIndex, setTabIndex } =
		useContext(AdminContext)

	let addProductTabIndex = 0
	let modifyProductTabIndex = 1

	const toggleAdminPanel = () => {
		setIsPanelVisible(!isPanelVisible)
	}

	const selectTab = (tabSelected) => {
		setTabIndex(tabSelected)
		setIsPanelVisible(true)
	}

	const tabsConfig = [
		{
			key: "1",
			label: "",
			onClick: () => toggleAdminPanel(),
			Icon: isPanelVisible ? <FiChevronDown /> : <FiChevronUp />,
			className: !isPanelVisible && "is-active",
		},
		{
			key: "2",
			label: "Ajouter un produit",
			onClick: () => selectTab(addProductTabIndex),
			Icon: <AiOutlinePlus className="icon" />,
			className: tabIndex == addProductTabIndex && "is-active",
		},
		{
			key: "3",
			label: "Modifier un produit",
			onClick: () => selectTab(modifyProductTabIndex),
			Icon: <MdModeEditOutline className="icon" />,
			className: tabIndex == modifyProductTabIndex && "is-active",
		},
	]

	return (
		<TabsStyled>
			{tabsConfig.map((tab) => {
				return (
					<Tab
						key={tab.key}
						label={tab.label}
						Icon={tab.Icon}
						onClick={tab.onClick}
						className={tab.className}
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
