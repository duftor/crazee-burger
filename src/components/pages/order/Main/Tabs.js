import React, { useContext } from "react"
import styled from "styled-components"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import AdminPanelContext from "../../../../context/AdminPanelContext"
import { theme } from "../../../../theme/index"
import Tab from "./Tab"

export default function Tabs() {
	const { isPanelVisible, setIsPanelVisible, tabIndex, setTabIndex } =
		useContext(AdminPanelContext)

	const toggleAdminPanel = () => {
		setIsPanelVisible(!isPanelVisible)
	}

	const onTab1Click = () => {
		setTabIndex(0)
		setIsPanelVisible(true)
	}
	const onTab2Click = (e) => {
		setTabIndex(1)
		setIsPanelVisible(true)
	}
	return (
		<TabsStyled>
			<div className="tabs">
				<Tab
					onClick={toggleAdminPanel}
					isSelected={!isPanelVisible}
					icon={isPanelVisible ? <FiChevronDown /> : <FiChevronUp />}
				/>
				<Tab
					label={"Ajouter un produit"}
					isSelected={tabIndex === 0}
					onClick={onTab1Click}
					icon={<AiOutlinePlus className="icon" />}
				/>
				<Tab
					label={"Modifier un produit"}
					isSelected={tabIndex === 1}
					onClick={onTab2Click}
					icon={<MdModeEditOutline className="icon" />}
				/>
			</div>
		</TabsStyled>
	)
}

const TabsStyled = styled.div`
	.icon {
		width: 16px;
		height: 16px;
		padding-right: 13px;
	}

	.tabs {
		margin-left: 71px;
		display: flex;
		height: 42px;

		.tab {
			/* box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: ${theme.colors.white};

			margin-right: 1px;

			border-width: 1px 1px 2px 1px;
			border-style: solid;
			border-color: ${theme.colors.greyLight};
			box-shadow: 0px -2px 8px -2px rgba(0, 0, 0, 0.1);
			border-radius: 5px 5px 0px 0px;

			color: ${theme.colors.greySemiDark};
			font-weight: 400;
			font-size: 16px;

			cursor: pointer; */
		}

		/* .tab:hover {
			border-bottom-color: ${theme.colors.white};
			text-decoration: underline;
		} */

		/* .tab {
			padding-right: 23px;
			.icon {
				padding: 13px 13px 13px 22px;
			}
		} */

		/* .tab.toggle {
			padding: 13px 22px;
			.icon {
				padding: 0;
			}
		} */

		.selected {
			background-color: ${theme.colors.background_dark};
			border-color: ${theme.colors.background_dark};
			color: white;
		}
		.selected:hover {
			border-bottom-color: ${theme.colors.background_dark};
		}
	}
`
