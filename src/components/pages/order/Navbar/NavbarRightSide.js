import styled from "styled-components"
import Profile from "./Profile"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import ToggleButton from "../../../reusable-ui/ToggleButton"
import { useState } from "react"

export default function NavbarRightSide() {
	const [isAdminMode, setIsAdminMode] = useState(false)

	const onToggle = () => {
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
			<ToggleButton onToggle={onToggle} isChecked={isAdminMode} />

			{/* <div className="admin-button">Admin Button</div> */}
			<Profile />
			<ToastContainer />
		</NavbarRightSideStyled>
	)
}

const NavbarRightSideStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`
