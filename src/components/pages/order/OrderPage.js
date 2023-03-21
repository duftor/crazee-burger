import styled from "styled-components"
import Main from "./Main/Main"
import Navbar from "./Navbar/Navbar"
import { theme } from "../../../theme/index"
import AdminContext from "../../../context/AdminContext"
import { useState } from "react"
import { fakeMenu } from "../../../data/fakeMenu"
import { convertToNumber } from "../../../utils/maths"

// Without Vi
export default function OrderPage() {
	// State
	const [isAdminMode, setIsAdminMode] = useState(false)
	const [isCollapsed, setIsCollapsed] = useState(false)
	const [currentTabSelected, setCurrentTabSelected] = useState("add")
	const [menu, setMenu] = useState(fakeMenu.LARGE)

	// Comportements
	const handleAdd = (productToAdd) => {
		// 1. copy du state
		const menuCopy = [...menu]

		// 2. manipulation de la copie du state
		let priceFormated = convertToNumber(productToAdd.price)
		productToAdd.price = isNaN(priceFormated) ? "NaN" : priceFormated

		const menuUpdated = [productToAdd, ...menuCopy]

		// 3. update du state avec le setter dédié
		setMenu(menuUpdated)
	}

	const handleDelete = (productIdToRemove) => {
		// Filter out != filter in
		const menuUpdated = menu.filter((item) => item.id !== productIdToRemove)

		setMenu(menuUpdated)
	}

	const resetMenu = () => {
		setMenu(fakeMenu.MEDIUM)
	}

	const adminContextValue = {
		isAdminMode,
		setIsAdminMode,
		isCollapsed,
		setIsCollapsed,
		currentTabSelected,
		setCurrentTabSelected,
		menu,
		handleAdd,
		handleDelete,
		resetMenu,
	}

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

		border-radius: 15px;
		margin: auto;
	}
`
