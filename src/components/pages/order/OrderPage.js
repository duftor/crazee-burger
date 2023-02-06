import { Link } from "react-router-dom"
import styled from "styled-components"
import Main from "./Main/Main"
import Navbar from "./Navbar/Navbar"
import { theme } from "../../../theme/index"
import AdminPanelContext from "../../../context/AdminPanelContext"
import { useState } from "react"

// Without Vi
export default function OrderPage() {
	// State
	const [isAdminMode, setIsAdminMode] = useState(false)
	const [isPanelVisible, setIsPanelVisible] = useState(true)
	const [tabIndex, setTabIndex] = useState(0)

	const adminPanelContextValue = {
		isAdminMode,
		setIsAdminMode,
		isPanelVisible,
		setIsPanelVisible,
		tabIndex,
		setTabIndex,
	}

	// Comportements

	// Affichage
	return (
		<AdminPanelContext.Provider value={adminPanelContextValue}>
			<OrderPageStyled>
				<div className="container">
					<Navbar />
					<Main />
				</div>
			</OrderPageStyled>
		</AdminPanelContext.Provider>
	)
}

const OrderPageStyled = styled.div`
	background-color: ${theme.colors.primary};
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	.container {
		width: 100%;
		max-width: 1400px;
		height: 95vh;

		display: flex;
		flex-direction: column;
	}
`
