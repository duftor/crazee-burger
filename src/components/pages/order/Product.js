import React from "react"
import styled from "styled-components"
import { formatPrice } from "../../../utils/maths"
import PrimaryButton from "../../reusable-ui/PrimaryButton"
import { theme } from "../../../theme/index"

export default function Product({ id, title, imageSource, price }) {
	return (
		<ProductStyled>
			<div className="image">
				<img src={imageSource} alt={title} />
			</div>
			<div className="info-text">
				<div className="title">{title}</div>
				<div className="description">
					<div className="left-description">{formatPrice(price)}</div>
					<div className="right-description">
						<PrimaryButton label={"Ajouter"} />
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

	background: ${theme.colors.white};
	box-shadow: -8px 8px 20px rgba(0, 0, 0, 0.2);
	border-radius: ${theme.borderRadius.extraRound};

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

			font-size: ${theme.fonts.size.P4};
			font-weight: ${theme.fonts.weights.bold};
			color: ${theme.colors.dark};
			text-align: left;

			font-family: "Amatic SC", cursive;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.description {
			display: grid;
			grid-template-columns: 1fr 1fr;

			.left-description {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-weight: ${theme.fonts.weights.medium};
				color: ${theme.colors.primary};

				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.right-description {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: ${theme.fonts.size.P1};

				button {
					font-size: ${theme.fonts.size.XS};
					cursor: pointer;
					padding: 12px;

					&:active:not(:disabled) {
						background-color: ${theme.colors.primary};
						color: white;
						transition: all 200ms ease-out;
					}
				}
			}
		}
	}

	/* 
			
			
		
		

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
