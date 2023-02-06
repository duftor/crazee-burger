import React, { useContext } from "react"
import styled from "styled-components"
import AdminPanelContext from "../../../../context/AdminPanelContext"
import Tabs from "./Tabs"
import { theme } from "../../../../theme/index"

export default function AdminPanel() {
	const { tabIndex, isPanelVisible } = useContext(AdminPanelContext)

	return (
		<AdminPanelStyled>
			<Tabs />
			{isPanelVisible && (
				<div className="content">
					{tabIndex === 0 ? (
						<div className="content-add-product">Ajouter un produit</div>
					) : (
						<div className="content-modify-product">Modifier un produit</div>
					)}
				</div>
			)}
		</AdminPanelStyled>
	)
}

const AdminPanelStyled = styled.div`
	/* position: absolute;  // Cache la scrollbar
	width: 1400px;
	bottom: 2.5%; */
	box-sizing: border-box;
	position: sticky;
	bottom: 0;

	.content {
		height: 250px;
		background-color: ${theme.colors.white};

		border-bottom-left-radius: ${theme.borderRadius.extraRound};
		/* border-bottom-right-radius: ${theme.borderRadius
			.extraRound};   // Si position absolute */

		border-top: 1px solid ${theme.colors.greyLight};
		box-shadow: 0px -2px 8px -2px rgba(0, 0, 0, 0.2);
	}
`