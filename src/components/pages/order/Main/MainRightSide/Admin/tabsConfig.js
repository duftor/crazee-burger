import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import AddForm from "./AdminPanel/AddForm"

export const tabsConfig = [
	{
		index: "add",
		label: "Ajouter un produit",
		Icon: <AiOutlinePlus />,
		Content: <AddForm />,
	},
	{
		index: "edit",
		label: "Modifier un produit",
		Icon: <MdModeEditOutline />,
		Content: "",
	},
]

export const getTabSelected = (tabs, currentTabSelected) => {
	return tabs.find((tab) => tab.index === currentTabSelected)
}
