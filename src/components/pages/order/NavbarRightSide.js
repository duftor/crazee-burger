import { theme } from "../../../theme/index"
import styled from "styled-components"
import Profile from "./Profile"

export default function NavbarRightSide({ username }) {
	return (
		<NavbarRightSideStyled>
			{/* <div className="admin-button">Admin Button</div> */}
			<Profile username={username} />
		</NavbarRightSideStyled>
	)
}

const NavbarRightSideStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`
