import React, { useContext } from "react"
import PrimaryButton from "../../../reusable-ui/PrimaryButton"
import { fakeMenu } from "../../../../data/fakeMenu"
import MenuContext from "../../../../context/MenuContext"
import styled from "styled-components"

export default function EmptyMenuPage() {
	const { setMenu } = useContext(MenuContext)

	const handleSubmit = (e) => {
		e.preventDefault()
		setMenu(fakeMenu.LARGE)
	}

	return (
		<EmptyMenuPageStyled className="empty-menu">
			<h1>Le menu est vide ?</h1>
			<div>Clicquez ci-dessous pour le réinitialiser</div>

			<form onSubmit={handleSubmit}>
				<PrimaryButton
					className={"button"}
					label={"Générer de nouveaux produits"}
				/>
			</form>
		</EmptyMenuPageStyled>
	)
}

const EmptyMenuPageStyled = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	div {
		padding: 21px;
		padding-bottom: 31px;

		font-family: "Amatic SC";
		font-style: normal;
		font-weight: 400;
		font-size: 36px;
		line-height: 45px;
	}

	h1 {
		font-family: "Amatic SC";
		font-style: normal;
		font-weight: 700;
		font-size: 36px;
		line-height: 45px;

		margin: 0;
	}

	.button {
		font-family: "Arial";
		font-style: normal;
		font-weight: 700;
		font-size: 12px;
		line-height: 12px;

		padding: 19px 25px;
		width: fit-content;
		cursor: pointer;
	}
`
