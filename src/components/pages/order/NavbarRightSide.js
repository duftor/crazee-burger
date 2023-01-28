import styled from "styled-components"
import Profile from "./Profile"

export default function NavbarRightSide() {
	return (
		<NavbarRightSideStyled>
			{/* <div className="admin-button">Admin Button</div> */}
			<Profile />
		</NavbarRightSideStyled>
	)
}

const NavbarRightSideStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`
