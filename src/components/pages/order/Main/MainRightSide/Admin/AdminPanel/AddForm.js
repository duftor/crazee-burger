import React, { useContext, useState } from "react"
import styled from "styled-components"
import { FaHamburger } from "react-icons/fa"
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"
import { theme } from "../../../../../../../theme/index"
import AdminContext from "../../../../../../../context/AdminContext"
import TextInput from "../../../../../../reusable-ui/TextInput"
import Button from "../../../../../../reusable-ui/Button"
import ImagePreview from "./ImagePreview"
import SubmitMessage from "./SubmitMessage"

const EMPTY_PRODUCT = {
	id: " ",
	imageSource: "",
	title: "",
	price: 0,
	quantity: 0,
	isAvailable: true,
	isAdvertised: false,
}

export default function AddForm() {
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
		<AddFormStyled onSubmit={handleSubmit}>
			<ImagePreview imageSource={newProduct.imageSource} />
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

			<div className="submit">
				<Button variant="success" label="Ajouter un nouveau produit au menu" />
				{isSubmitted && <SubmitMessage />}
			</div>
		</AddFormStyled>
	)
}

const AddFormStyled = styled.form`
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
	.submit {
		grid-area: 4 / 2 / 5 / -1;
	}

	.submit {
		display: flex;
	}
`
