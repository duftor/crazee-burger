import styled from "styled-components"
import Main from "./Main/Main"
import Navbar from "./Navbar/Navbar"
import { theme } from "../../../theme/index"
import AdminContext from "../../../context/AdminContext"
import { useState } from "react"

// Without Vi
export default function OrderPage() {
	// State
	const [isAdminMode, setIsAdminMode] = useState(false)
	const [isCollapsed, setIsCollapsed] = useState(false)
	const [currentTabSelected, setCurrentTabSelected] = useState("add")

	const adminContextValue = {
		isAdminMode,
		setIsAdminMode,
		isCollapsed,
		setIsCollapsed,
		currentTabSelected,
		setCurrentTabSelected,
	}

	// Comportements

	// Affichage
	return (
		<AdminContext.Provider value={adminContextValue}>
			<OrderPageStyled>
				<div className="container">
					<Navbar />
					<Main />
				</div>
			</OrderPageStyled>
		</AdminContext.Provider>
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
