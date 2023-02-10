import React, { useContext } from "react"
import styled from "styled-components"
import AdminContext from "../../../../context/AdminContext"
import Tabs from "./Tabs"
import { theme } from "../../../../theme/index"
import { getTabsConfig } from "./Admin/tabsConfig"

export default function AdminPanel() {
	const { currentTabSelected, isPanelVisible } = useContext(AdminContext)

	const tabs = getTabsConfig(currentTabSelected)
	const tabSelected = tabs.find((tab) => tab.index === currentTabSelected)

	return (
		<AdminPanelStyled>
			<Tabs />
			{isPanelVisible && (
				<div className="content">
					{/* {currentTabSelected === 0 ? (
						<div className="content-add-product">Ajouter un produit</div>
					) : (
						<div className="content-modify-product">Modifier un produit</div>
					)} */}
					{currentTabSelected === tabSelected.index && tabSelected.label}
				</div>
			)}
		</AdminPanelStyled>
	)
}

const AdminPanelStyled = styled.div`
	// @TODO: Ajouter de l'espace sous les vignettes

	position: absolute; // Cache la scrollbar
	bottom: 0;
	width: 100%;
	/* box-sizing: border-box; */
	/* position: sticky;
	bottom: 0; */
	overflow: hidden;

	.content {
		height: 250px;
		background-color: ${theme.colors.white};

		border-bottom-left-radius: ${theme.borderRadius.extraRound};
		/* border-bottom-right-radius: ${theme.borderRadius
			.extraRound};   // Si position absolute */

		/* border-top: 1px solid ${theme.colors.greyLight}; */
		box-shadow: 0px -2px 8px -2px rgba(0, 0, 0, 0.2);
	}
`
