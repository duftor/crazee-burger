import React, { useContext, useState } from "react"
import styled from "styled-components"
import { FaHamburger } from "react-icons/fa"
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"
import { FiCheck } from "react-icons/fi"
import { theme } from "../../../../../theme/index"
import AdminContext from "../../../../../context/AdminContext"
import TextInput from "../../../../reusable-ui/TextInput"

const EMPTY_PRODUCT = {
	id: " ",
	imageSource: "",
	title: "",
	price: 0,
	quantity: 0,
	isAvailable: true,
	isAdvertised: false,
}

export default function AddProductForm() {
	const { handleAdd } = useContext(AdminContext)
	const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target
		// Dynamic property name
		setNewProduct({
			...newProduct,
			[name]: value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		setIsSubmitted(true)
		setTimeout(() => {
			setIsSubmitted(false)
		}, 2000)

		handleAdd({ ...newProduct, id: crypto.randomUUID() })
		setNewProduct(EMPTY_PRODUCT)
	}

	return (
		<AddProductFormStyled onSubmit={handleSubmit}>
			<div className="image-preview">
				{newProduct.imageSource ? (
					<img src={newProduct.imageSource} alt="" />
				) : (
					<div
						className={`no-img-div ${!newProduct.imageSource && "has-border"}`}
					>
						Aucune image
					</div>
				)}
			</div>
			<div className="product-input name">
				<TextInput
					name="title"
					value={newProduct.title}
					placeholder="Nom du produit (ex: Super Burger)"
					onChange={handleChange}
					Icon={<FaHamburger />}
					variant="minimalist"
				/>
			</div>
			<div className="product-input url">
				<TextInput
					name="imageSource"
					value={newProduct.imageSource}
					placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
					onChange={handleChange}
					Icon={<BsFillCameraFill />}
					variant="minimalist"
				/>
			</div>
			<div className="product-input price">
				<TextInput
					name="price"
					value={newProduct.price ? newProduct.price : ""}
					placeholder="Prix"
					onChange={handleChange}
					Icon={<MdOutlineEuro />}
					variant="minimalist"
				/>
			</div>

			<div className="submit-btn">
				<button>Ajouter un nouveau produit au menu</button>
				{isSubmitted && (
					<span className="success-div">
						<FiCheck className="icon" />
						Ajouté avec succès !
					</span>
				)}
			</div>
		</AddProductFormStyled>
	)
}

const AddProductFormStyled = styled.form`
	padding-left: 71px;
	padding-top: 31px;

	width: 63%;
	min-width: 650px;
	/* height: 140px; */

	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(4, 35px);
	grid-row-gap: 8px;

	font-family: ${theme.fonts.family.secondary};
	font-weight: ${theme.fonts.weights.regular};
	font-size: ${theme.fonts.size.P0};
	line-height: 17px;

	.product-input.name {
		grid-area: 1 / 2 / 2 / -1;
	}
	.product-input.url {
		grid-area: 2 / 2 / 3 / -1;
	}
	.product-input.price {
		grid-area: 3 / 2 / 4 / -1;
	}
	.submit-btn {
		grid-area: 4 / 2 / 5 / -1;
	}

	.image-preview {
		grid-area: 1 / 1 / 4 / 2;
		box-sizing: border-box;

		width: 100%;
		height: 120px;

		display: flex;
		align-items: center;
		justify-content: center;
		padding-right: 20px;

		.no-img-div {
			font-weight: ${theme.fonts.weights.regular};
			font-size: ${theme.fonts.size.P0};
			line-height: 24px;
			color: ${theme.colors.greySemiDark};
		}
		.has-border {
			border: 1px solid ${theme.colors.greyLight};
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: ${theme.borderRadius.round};
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	button {
		box-sizing: border-box;

		background: ${theme.colors.success};
		border: 1px solid ${theme.colors.success};
		border-radius: ${theme.borderRadius.round};

		width: 275px;

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
`
