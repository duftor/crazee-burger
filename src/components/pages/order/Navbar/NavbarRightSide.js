import styled from "styled-components"
import Profile from "./Profile"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ToggleButton from "../../../reusable-ui/ToggleButton"
import { useContext, useState } from "react"
import AdminToast from "./AdminToast"
import AdminPanelContext from "../../../../context/AdminPanelContext"

export default function NavbarRightSide() {
	const { isAdminMode, setIsAdminMode } = useContext(AdminPanelContext)

	const displayToastNotification = () => {
		setIsAdminMode(!isAdminMode)

		if (!isAdminMode) {
			toast.info("Mode admin activé", {
				// icon: <FaUserSecret size={30} />,
				theme: "dark",
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			})
		}
	}

	return (
		<NavbarRightSideStyled>
			<ToggleButton
				onToggle={displayToastNotification}
				isChecked={isAdminMode}
				labelIfChecked="Désactiver le mode admin"
				labelIfUnchecked="Activer le mode admin"
			/>
			<Profile />
			<AdminToast />
		</NavbarRightSideStyled>
	)
}

const NavbarRightSideStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`
