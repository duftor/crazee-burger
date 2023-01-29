import React from "react"
import styled from "styled-components"
import { formatPrice } from "../../../utils/maths"
import PrimaryButton from "../../reusable-ui/PrimaryButton"

export default function Product({ id, title, imageSource, price }) {
	return (
		<CardItemStyled key={id + imageSource + price}>
			<div className="image">
				<img src={imageSource} alt={title} />
			</div>
			<div className="info-text">
				<div className="description">
					<div className="title">{title}</div>
					<div className="price">{formatPrice(price)}</div>
					<PrimaryButton label={"Ajouter"} className="add-btn" />
				</div>
			</div>
		</CardItemStyled>
	)
}

const CardItemStyled = styled.div`
	height: 330px;
	width: 240px;
	/* margin: 30px auto; */

	background: white;
	box-shadow: -8px 8px 20px rgba(0, 0, 0, 0.2);
	border-radius: 15px;

	display: flex;
	flex-direction: column;

	.image {
		width: 100px;
		/* height: auto; */
		img {
			width: 100%;
			height: 100%;
			/* width: 200px; */
			/* height: 145px; */
			/* object-fit: contain; */
			/* padding: 50px 20px 15px 20px; */
		}
	}

	.card-info {
		margin: 15px 20px 10px 20px;
		h1 {
			font-family: "Amatic SC", cursive;
			font-weight: 700;
			font-size: 36px;
			line-height: 45.4px;
			text-align: left;
			margin: 0;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.bottom-info {
			/* width: 100%; */
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: auto 25px;

			.price {
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
				color: #ffa01b;
			}

			.add-btn {
				width: 95px;
				height: 38px;
				font-size: 11px;
				font-weight: 700;
				font-family: Arial, Helvetica, sans-serif;
				line-height: 12px;

				cursor: pointer;
				&:active:not(:disabled) {
					background-color: #ffa01b;
					color: white;
					transition: all 200ms ease-out;
				}
			}
		}
	}
`
