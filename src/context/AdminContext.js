import { createContext } from "react"

export default createContext({
	isAdminMode: false,
	setIsAdminMode: () => {},

	isPanelVisible: true,
	setIsPanelVisible: () => {},

	currentTabSelected: "add",
	setCurrentTabSelected: () => {},
})
