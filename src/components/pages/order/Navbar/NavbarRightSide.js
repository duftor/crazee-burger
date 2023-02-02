import styled from "styled-components"
import Profile from "./Profile"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ToggleButton from "../../../reusable-ui/ToggleButton"
import { useState } from "react"
import { theme } from "../../../../theme/index"

export default function NavbarRightSide() {
	const [isAdminMode, setIsAdminMode] = useState(false)

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
			<ToastContainer className={"toaster"} />
		</NavbarRightSideStyled>
	)
}

const NavbarRightSideStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;

	.toaster {
		max-width: 300px;
	}

	.Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
		background: ${theme.colors.background_dark};
	}

	.body-toast {
		.Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
			margin-right: 20px;
			margin-left: 5px;
		}
		div {
			line-height: 1.3em;
		}
	}
`
