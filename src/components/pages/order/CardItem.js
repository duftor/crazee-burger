import React from "react"
import styled from "styled-components"
import { formatPrice } from "../../../utils/maths"
import PrimaryButton from "../../reusable-ui/PrimaryButton"

export default function CardItem({ item }) {
	return (
		<CardItemStyled key={item.id + item.imageSource + item.price}>
			<img src={item.imageSource} alt={item.title} />
			<div className="card-info">
				<h1>{item.title}</h1>
				<div className="bottom-info">
					<div className="price">{formatPrice(item.price)}</div>
					<PrimaryButton label={"Ajouter"} className="add-btn" />
				</div>
			</div>
		</CardItemStyled>
	)
}

const CardItemStyled = styled.div`
	height: 330px;
	width: 240px;
	margin: 30px auto;

	background: white;
	box-shadow: -8px 8px 20px rgba(0, 0, 0, 0.2);
	border-radius: 15px;

	display: flex;
	flex-direction: column;

	img {
		width: 200px;
		height: 145px;
		object-fit: contain;
		padding: 50px 20px 15px 20px;
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
			}
		}
	}
`
