import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import AddProductForm from "./AdminPanel/AddProductForm"

export const tabsConfig = [
	{
		index: "add",
		label: "Ajouter un produit",
		Icon: <AiOutlinePlus />,
		content: <AddProductForm />,
	},
	{
		index: "edit",
		label: "Modifier un produit",
		Icon: <MdModeEditOutline />,
		content: "",
	},
]

export const getTabSelected = (tabs, currentTabSelected) => {
	return tabs.find((tab) => tab.index === currentTabSelected)
}
