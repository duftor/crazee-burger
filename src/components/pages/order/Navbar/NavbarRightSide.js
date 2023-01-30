import styled from "styled-components"
import Profile from "./Profile"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

export default function NavbarRightSide() {
	const notify = () => {
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

	return (
		<NavbarRightSideStyled>
			<button onClick={notify}>Notify !</button>

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
