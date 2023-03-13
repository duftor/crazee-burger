import { useContext } from "react"
import styled from "styled-components"
import Card from "../../../reusable-ui/Card"
import { formatPrice } from "../../../../utils/maths"
import { theme } from "../../../../theme"
import MenuContext from "../../../../context/MenuContext"
import AdminContext from "../../../../context/AdminContext"
import PrimaryButton from "../../../reusable-ui/PrimaryButton"
import { fakeMenu } from "../../../../data/fakeMenu"

export default function Menu() {
	const { menu, setMenu } = useContext(MenuContext)
	const { isAdminMode } = useContext(AdminContext)

	const comingSoonImageUrl = "/images/coming-soon.png"

	const handleClick = (id) => {
		const selectedItem = menu.find((item) => item.id === id)

		const newMenu = [...menu]

		newMenu.splice(newMenu.indexOf(selectedItem), 1)

		setMenu(newMenu)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setMenu(fakeMenu.SMALL)
	}

	return (
		<MenuStyled>
			{menu.length !== 0
				? menu.map(({ id, title, imageSource, price }) => (
						<Card
							key={id}
							title={title}
							imageSource={imageSource ? imageSource : comingSoonImageUrl}
							leftDescription={formatPrice(price)}
							onRemoveButtonClick={() => handleClick(id)}
							isThereRemoveButton={isAdminMode}
						/>
				  ))
				: isAdminMode && (
						<div className="empty-menu">
							<h1>Le menu est vide ?</h1>
							<div>Clicquez ci-dessous pour le réinitialiser</div>

							<form onSubmit={handleSubmit}>
								<PrimaryButton
									className={"button"}
									label={"Générer de nouveaux produits"}
								/>
							</form>
						</div>
				  )}
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

	.empty-menu {
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
	}
`
