import styled from "styled-components"
import Profile from "./Profile"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

export default function NavbarRightSide() {
	const notify = () => toast("Wow so easy !")

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
