import { useContext } from "react"
import styled from "styled-components"
import Card from "../../../../../reusable-ui/Card"
import { formatPrice } from "../../../../../../utils/maths"
import { theme } from "../../../../../../theme"
import AdminContext from "../../../../../../context/AdminContext"
import EmptyMenu from "./EmptyMenu"

const IMAGE_BY_DEFAULT = "/images/coming-soon.png"

export default function Menu() {
	const { isAdminMode, menu, handleDelete } = useContext(AdminContext)

	const handleClick = (id) => {
		handleDelete(id)
	}

	if (menu.length === 0 && isAdminMode)
		return (
			<MenuStyled>
				<EmptyMenu />
			</MenuStyled>
		)

	return (
		<MenuStyled>
			{menu.map(({ id, title, imageSource, price }) => (
				<Card
					key={id}
					title={title}
					imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
					leftDescription={formatPrice(price)}
					onDelete={() => handleClick(id)}
					hasDeleteButton={isAdminMode}
				/>
			))}
		</MenuStyled>
	)
}

const MenuStyled = styled.div`
	flex: 1 1 0%;
	background: ${theme.colors.background_white};

	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 1fr 1fr;
	gap: 60px 0px;

	padding: 50px 50px 150px;
	justify-items: center;
	overflow-y: scroll;

	box-shadow: ${theme.shadows.strong};
	border-bottom-left-radius: ${theme.borderRadius.extraRound};
	border-bottom-right-radius: ${theme.borderRadius.extraRound};
`
