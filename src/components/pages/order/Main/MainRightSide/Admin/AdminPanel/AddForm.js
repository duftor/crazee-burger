import React, { useContext, useState } from "react"
import styled from "styled-components"
import { theme } from "../../../../../../../theme/index"
import AdminContext from "../../../../../../../context/AdminContext"
import TextInput from "../../../../../../reusable-ui/TextInput"
import Button from "../../../../../../reusable-ui/Button"
import ImagePreview from "./ImagePreview"
import SubmitMessage from "./SubmitMessage"
import { getInputsConfig } from "./inputsConfig"

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

	const inputs = getInputsConfig(newProduct)

	return (
		<AddFormStyled onSubmit={handleSubmit}>
			<ImagePreview
				imageSource={newProduct.imageSource}
				title={newProduct.title}
			/>

			<div className="input-fields">
				{inputs.map(({ id, name, placeholder, Icon, value }) => (
					<TextInput
						key={id}
						name={name}
						placeholder={placeholder}
						value={value}
						onChange={handleChange}
						Icon={Icon}
						variant="minimalist"
					/>
				))}
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

	.submit {
		grid-area: 4 / 2 / 5 / -1;
		display: flex;
	}

	.input-fields {
		grid-area: 1 / 2 / 4 / -1;

		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, 1fr);
		grid-row-gap: 8px;
	}
`
