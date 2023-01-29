import { useState } from "react"
import styled from "styled-components"
import { fakeMenu1, fakeMenu2 } from "../../../../data/fakeMenu"
import CardItem from "../CardItem"
import { theme } from "../../../../theme/index"

export default function Menu() {
	const [menu, setMenu] = useState(fakeMenu2)

	return (
		<MenuStyled>
			{menu.map((product) => (
				<CardItem product={product} />
			))}
		</MenuStyled>
	)
}

const MenuStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-row-gap: 60px;

	padding: 50px 50px 150px;
	justify-items: center;

	background: ${theme.colors.background_white};
	box-shadow: inset 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
`
