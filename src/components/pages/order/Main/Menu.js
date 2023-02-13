import { useState } from "react"
import styled from "styled-components"
import { fakeMenu2 } from "../../../../data/fakeMenu"
import Card from "../../../reusable-ui/Card"
import { formatPrice } from "../../../../utils/maths"
import { theme } from "../../../../theme"

export default function Menu() {
	const [menu, setMenu] = useState(fakeMenu2)

	return (
		<MenuStyled>
			{menu.map(({ id, title, imageSource, price }) => (
				<Card
					key={id}
					title={title}
					imageSource={imageSource}
					leftDescription={formatPrice(price)}
				/>
			))}
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
