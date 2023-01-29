import React from "react"
import styled from "styled-components"
import { formatPrice } from "../../../utils/maths"
import PrimaryButton from "../../reusable-ui/PrimaryButton"
import { theme } from "../../../theme/index"

export default function Product({ id, title, imageSource, price }) {
	return (
		<ProductStyled key={id + imageSource + price}>
			<div className="image">
				<img src={imageSource} alt={title} />
			</div>
			<div className="info-text">
				<div className="title">{title}</div>
				<div className="description">
					<div className="price">{formatPrice(price)}</div>
					<div className="btn">
						<PrimaryButton label={"Ajouter"} className="add-btn" />
					</div>
				</div>
			</div>
		</ProductStyled>
	)
}

const ProductStyled = styled.div`
	height: 300px;
	width: 200px;

	display: grid;
	grid-template-rows: 65% 1fr;
	padding: 20px;
	padding-bottom: 10px;

	background: white;
	box-shadow: -8px 8px 20px rgba(0, 0, 0, 0.2);
	border-radius: 15px;

	.image {
		width: 100%;
		height: auto;
		margin-top: 30px;
		margin-bottom: 20px;

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	.info-text {
		display: grid;
		grid-template-rows: 30% 70%;
		padding: 5px;

		.title {
			margin: auto 0;
			width: 100%;
			position: relative;
			bottom: 10px;

			font-size: 36px;
			font-weight: 700;
			color: black;
			text-align: left;

			font-family: "Amatic SC", cursive;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.description {
			display: grid;
			grid-template-columns: 1fr 1fr;

			.price {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-weight: 400;
				color: #ffa01b;

				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.btn {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 18px;

				.add-btn {
					font-size: 12px;
					cursor: pointer;
					padding: 12px;
				}
			}
		}
	}

	/* .card-info {
		margin: 15px 20px 10px 20px;
		h1 {
			
			
		}

		.bottom-info {
			/* width: 100%; 
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
	}*/
`
