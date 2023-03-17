import React, { useContext } from "react"
import PrimaryButton from "../../../reusable-ui/PrimaryButton"
import { fakeMenu } from "../../../../data/fakeMenu"
import styled from "styled-components"
import { theme } from "../../../../theme/index"
import AdminContext from "../../../../context/AdminContext"

export default function EmptyMenuPage() {
	const { resetMenu } = useContext(AdminContext)

	const onClick = (e) => {
		resetMenu()
	}

	return (
		<EmptyMenuPageStyled className="empty-menu">
			<h1>Le menu est vide ?</h1>
			<div>Clicquez ci-dessous pour le réinitialiser</div>

			<PrimaryButton
				className={"button"}
				label={"Générer de nouveaux produits"}
				onClick={onClick}
			/>
		</EmptyMenuPageStyled>
	)
}

const EmptyMenuPageStyled = styled.div`
	grid-area: 1/2 / 3/4;
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	div {
		padding: 21px;
		padding-bottom: 31px;

		font-family: ${theme.fonts.family.primary};
		font-weight: ${theme.fonts.weights.regular};
		font-size: ${theme.fonts.size.P4};
		line-height: 45px;
	}

	h1 {
		font-family: ${theme.fonts.family.primary};
		font-weight: ${theme.fonts.weights.bold};
		font-size: ${theme.fonts.size.P4};
		line-height: 45px;

		margin: 0;
	}

	.button {
		font-family: ${theme.fonts.family.secondary};
		font-weight: ${theme.fonts.weights.bold};
		font-size: ${theme.fonts.size.XS};
		line-height: 12px;

		padding: 19px 25px;
		width: fit-content;
		cursor: pointer;
	}
`
