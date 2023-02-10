import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"

export const getTabsConfig = () => [
	// {
	// 	index: "1",
	// 	label: "",
	// 	onClick: () => toggleAdminPanel(),
	// 	Icon: isPanelVisible ? <FiChevronDown /> : <FiChevronUp />,
	// 	className: !isPanelVisible && "is-active",
	// },
	{
		index: "add",
		label: "Ajouter un produit",
		Icon: <AiOutlinePlus className="icon" />,
	},
	{
		index: "edit",
		label: "Modifier un produit",
		Icon: <MdModeEditOutline className="icon" />,
	},
]
