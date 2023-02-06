import { createContext } from "react"

export default createContext({
	isAdminMode: false,
	setIsAdminMode: () => {},

	isPanelVisible: true,
	setIsPanelVisible: () => {},

	tabIndex: 0,
	setTabIndex: () => {},
})
