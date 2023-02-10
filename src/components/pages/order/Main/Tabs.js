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

	const selectTab = (tabIndex) => {
		setTabIndex(tabIndex)
		setIsPanelVisible(true)
	}

	return (
		<TabsStyled>
			<Tab
				onClick={toggleAdminPanel}
				isSelected={!isPanelVisible}
				icon={isPanelVisible ? <FiChevronDown /> : <FiChevronUp />}
			/>
			<Tab
				label={"Ajouter un produit"}
				isSelected={tabIndex === addProductTabIndex}
				onClick={() => selectTab(addProductTabIndex)}
				icon={<AiOutlinePlus className="icon" />}
			/>
			<Tab
				label={"Modifier un produit"}
				isSelected={tabIndex === modifyProductTabIndex}
				onClick={() => selectTab(modifyProductTabIndex)}
				icon={<MdModeEditOutline className="icon" />}
			/>
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

	.selected {
		background-color: ${theme.colors.background_dark};
		border-color: ${theme.colors.background_dark};
		color: white;
	}
	.selected:hover {
		border-bottom-color: ${theme.colors.background_dark};
	}
`
