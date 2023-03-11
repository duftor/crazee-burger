import React, { useContext, useState } from "react"
import styled from "styled-components"
import { FaHamburger } from "react-icons/fa"
import MenuContext from "../../../../../context/MenuContext"
import { formatPrice } from "../../../../../utils/maths"

export default function AddProductForm() {
	const { menu, setMenu } = useContext(MenuContext)

	const [name, setName] = useState("")
	const [imageUrl, setImageUrl] = useState("")
	const [price, setPrice] = useState("")

	const handleNameChange = (e) => {
		setName(e.target.value)
	}
	const handleImageUtrChange = (e) => {
		setImageUrl(e.target.value)
	}
	const handlePriceChange = (e) => {
		setPrice(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		let newMenu = menu
		newMenu.push({
			id: menu.length + 1,
			imageSource: imageUrl,
			title: name,
			price: isNaN(price) ? "NaN €" : formatPrice(price),
			quantity: 0,
			isAvailable: true,
			isAdvertised: false,
		})

		setMenu(newMenu)
	}

	return (
		<AddProductFormStyled>
			<div className="image-div">
				{imageUrl ? (
					<div>Aucune image</div>
				) : (
					<img src="/images/coming-soon.png" alt="" />
				)}
			</div>
			<form action="" onSubmit={handleSubmit}>
				<div className="product-input">
					<FaHamburger className="icon" color="#747B91" />
					<input
						type="text"
						placeholder="Nom du produit (ex: Super Nurger)"
						value={name}
						onChange={handleNameChange}
					/>
				</div>
				<div className="product-input">
					<FaHamburger className="icon" color="#747B91" />
					<input
						type="url"
						placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
						value={imageUrl}
						onChange={handleImageUtrChange}
					/>
				</div>
				<div className="product-input">
					<FaHamburger className="icon" color="#747B91" />
					<input
						type="text"
						placeholder="Prix"
						value={price}
						onChange={handlePriceChange}
					/>
				</div>
				<button>Ajouter un nouveau produit au menu</button>
			</form>
		</AddProductFormStyled>
	)
}

const AddProductFormStyled = styled.div`
	padding-left: 71px;
	padding-top: 31px;

	width: 63%;

	display: flex;

	.image-div {
		border: 1px solid #e4e5e9;
		width: 215.14px;
		height: 120.14px;

		display: flex;
		align-items: center;
		justify-content: center;

		div {
			font-weight: 400;
			font-size: 16px;
			line-height: 24px;
			color: #93a2b1;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	form {
		height: 120.14px;
		width: 100%;
		padding-left: 20px;

		display: flex;
		flex-direction: column;
		gap: 8px;

		.product-input {
			display: flex;
			flex-direction: row;
			align-items: center;
			height: 35px;

			padding: 8px 16px 8px 24px;
			gap: 13px;

			background: #f5f5f7;
			border-radius: 5px;

			.icon {
				width: 15px;
				height: 13.13px;
			}

			input {
				padding: 1px 2px;
				background-color: #f5f5f7;
				border: none;
				width: 100%;

				color: #17161a;
				font-family: "Arial";
				font-style: normal;
				font-weight: 400;
				font-size: 15px;
				line-height: 17px;
			}

			input::placeholder {
				font-family: "Arial";
				font-style: normal;
				font-weight: 400;
				font-size: 15px;
				line-height: 17px;
				color: #a7a8ad;
			}
		}

		button {
			box-sizing: border-box;

			background: #60bd4f;
			border: 1px solid #60bd4f;
			border-radius: 5px;

			height: 35px;
			width: fit-content;
			padding: 10px 29px;

			font-family: "Arial";
			font-weight: 700;
			font-size: 12.3333px;
			line-height: 14px;
			align-items: center;
			text-align: center;

			color: #ffffff;
		}
	}
`
