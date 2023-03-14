import { useContext } from "react"
import styled from "styled-components"
import Card from "../../../reusable-ui/Card"
import { formatPrice } from "../../../../utils/maths"
import { theme } from "../../../../theme"
import AdminContext from "../../../../context/AdminContext"
import EmptyMenuPage from "./EmptyMenuPage"

export default function Menu() {
	const { isAdminMode, menu, setMenu } = useContext(AdminContext)

	const defaultImage = "/images/coming-soon.png"

	const handleClick = (id) => {
		const selectedItem = menu.find((item) => item.id === id)

		const newMenu = [...menu]

		newMenu.splice(newMenu.indexOf(selectedItem), 1)

		setMenu(newMenu)
	}

	return (
		<MenuStyled>
			{menu.length !== 0
				? menu.map(({ id, title, imageSource, price }) => (
						<Card
							key={id}
							title={title}
							imageSource={imageSource ? imageSource : defaultImage}
							leftDescription={formatPrice(price)}
							onRemoveButtonClick={() => handleClick(id)}
							hasDeleteButton={isAdminMode}
						/>
				  ))
				: isAdminMode && <EmptyMenuPage />}
		</MenuStyled>
	)
}

const MenuStyled = styled.div`
	background: ${theme.colors.background_white};

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-row-gap: 60px;

	padding: 50px 50px 150px;
	justify-items: center;
	overflow-y: scroll;

	box-shadow: ${theme.shadows.strong};
	border-bottom-left-radius: ${theme.borderRadius.extraRound};
	border-bottom-right-radius: ${theme.borderRadius.extraRound};
`
