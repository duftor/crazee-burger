import React, { useContext, useState } from "react"
import styled from "styled-components"
import { FaHamburger } from "react-icons/fa"
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"
import { FiCheck } from "react-icons/fi"
import { convertToNumber } from "../../../../../utils/maths"
import { theme } from "../../../../../theme/index"
import AdminContext from "../../../../../context/AdminContext"

const EMPTY_PRODUCT = {
	id: 0,
	imageSource: "",
	title: "",
	price: "",
	quantity: 0,
	isAvailable: true,
	isAdvertised: false,
}

export default function AddProductForm() {
	const { handleAdd } = useContext(AdminContext)
	const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

	const [isSuccessDivVisible, setIsSuccessDivVisible] = useState(false)

	const handleChange = (e) => {
		// Dynamic property name
		setNewProduct({
			...newProduct,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		setIsSuccessDivVisible(true)
		setTimeout(() => {
			setIsSuccessDivVisible(false)
		}, 2000)

		handleAdd(newProduct)
		setNewProduct(EMPTY_PRODUCT)
	}

	return (
		<AddProductFormStyled imageUrl={newProduct.imageSource}>
			<div className="image-div">
				{newProduct.imageSource ? (
					<img src={newProduct.imageSource} alt="" />
				) : (
					<div>Aucune image</div>
				)}
			</div>
			<form action="" onSubmit={handleSubmit}>
				<div className="product-input">
					<FaHamburger className="icon" color={theme.colors.greyBlue} />
					<input
						type="text"
						name="title"
						placeholder="Nom du produit (ex: Super Burger)"
						value={newProduct.title}
						onChange={handleChange}
					/>
				</div>
				<div className="product-input">
					<BsFillCameraFill className="icon" color={theme.colors.greyBlue} />
					<input
						type="url"
						name="imageSource"
						placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
						value={newProduct.imageSource}
						onChange={handleChange}
					/>
				</div>
				<div className="product-input">
					<MdOutlineEuro className="icon" color={theme.colors.greyBlue} />
					<input
						type="text"
						name="price"
						placeholder="Prix"
						value={newProduct.price ? newProduct.price : ""}
						onChange={handleChange}
					/>
				</div>
				<div className="submit-btn">
					<button>Ajouter un nouveau produit au menu</button>
					{isSuccessDivVisible && (
						<span className="success-div">
							<FiCheck className="icon" />
							Ajouté avec succès !
						</span>
					)}
				</div>
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
		box-sizing: border-box;
		border: ${(props) =>
			props.imageUrl ? "none" : `1px solid ${theme.colors.greyLight}`};

		width: 20%;
		min-width: 110px;
		height: 120px;

		display: flex;
		align-items: center;
		justify-content: center;

		div {
			font-weight: ${theme.fonts.weights.regular};
			font-size: ${theme.fonts.size.P0};
			line-height: 24px;
			color: ${theme.colors.greySemiDark};
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	form {
		height: 120px;
		width: 100%;
		padding-left: 20px;

		display: flex;
		flex-direction: column;
		gap: 8px;

		font-family: ${theme.fonts.family.secondary};
		font-weight: ${theme.fonts.weights.regular};
		font-size: ${theme.fonts.size.P0};
		line-height: 17px;

		.product-input {
			display: flex;
			flex-direction: row;
			align-items: center;
			height: 35px;

			padding: 8px 16px 8px 24px;
			gap: 13px;

			background: ${theme.colors.background_white};
			border-radius: ${theme.borderRadius.round};

			.icon {
				width: 15px;
				height: 13px;
			}

			input {
				padding: 1px 2px;
				background-color: ${theme.colors.background_white};
				border: none;
				width: 100%;

				color: ${theme.colors.dark};
				font-size: ${theme.fonts.size.P0};
			}

			input::placeholder {
				color: ${theme.colors.greyMedium};
			}
		}

		button {
			box-sizing: border-box;

			background: ${theme.colors.success};
			border: 1px solid ${theme.colors.success};
			border-radius: ${theme.borderRadius.round};

			height: 35px;
			width: fit-content;
			padding: 10px 29px;

			font-family: ${theme.fonts.family.secondary};
			font-weight: ${theme.fonts.weights.bold};
			font-size: ${theme.fonts.size.XS};
			line-height: 14px;
			align-items: center;
			text-align: center;

			color: ${theme.colors.white};
		}

		button:hover {
			background: ${theme.colors.white};
			border: 1px solid ${theme.colors.success};
			color: ${theme.colors.success};

			cursor: pointer;
		}

		.submit-btn {
			display: flex;
			.success-div {
				padding-left: 5px;
				margin-left: 10px;

				color: ${theme.colors.success};
				gap: 5px;

				font-family: ${theme.fonts.family.tertiary};
				font-weight: ${theme.fonts.weights.regular};
				font-size: ${theme.fonts.size.P0};
				line-height: 20px;
				display: flex;
				align-items: center;

				.icon {
					width: 18px;
					height: 18px;
				}
			}
		}
	}
`
