import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "../../../../theme/index"
import Menu from "./Menu"
import { FiChevronDown } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"

export default function Main() {
	return (
		<MainStyled>
			{/* <div className="cart">CART</div> */}
			<Menu />
			<div className="admin-panel">
				<div className="tabs">
					<div className="tab toggle">
						<FiChevronDown className="icon" />
					</div>
					<div className="tab add-product selected">
						<AiOutlinePlus className="icon" />
						<span className="label">Ajouter un produit</span>
					</div>
					<div className="tab modify-product">
						<MdModeEditOutline className="icon" />
						<span className="label">Modifier un produit</span>
					</div>
				</div>
				<div className="content">
					<div className="content-add-product">AJOUTER UN PRDUIT</div>
					<div className="content-modify-product">MODIFIER UN PRODUIT</div>
				</div>
			</div>
		</MainStyled>
	)
}
const MainStyled = styled.div`
	background: ${theme.colors.background_white};
	flex: 1;

	display: grid;
	/* grid-template-columns: 25% 1fr; */
	grid-template-columns: 1fr;
	overflow-y: scroll;

	border-bottom-left-radius: ${theme.borderRadius.extraRound};
	border-bottom-right-radius: ${theme.borderRadius.extraRound};
	box-shadow: inset 0px 8px 20px 8px rgba(0, 0, 0, 0.2);

	.admin-panel {
		position: absolute;
		bottom: 0;
		width: 1400px;

		.icon {
			width: 16px;
			height: 16px;
		}

		border-bottom-left-radius: ${theme.borderRadius.extraRound};

		.tabs {
			margin-left: 71px;
			display: flex;
			height: 42px;

			.tab {
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: white;

				margin-right: 1px;

				border-width: 1px 1px 2px 1px;
				border-style: solid;
				border-color: #e4e5e9;
				box-shadow: 0px -2px 8px -2px rgba(0, 0, 0, 0.1);
				border-radius: 5px 5px 0px 0px;

				color: #93a2b1;
				font-weight: 400;
				font-size: 16px;
			}

			.tab.toggle {
				padding: 13px 22px;
			}

			.tab.add-product {
				padding-right: 23px;
				.icon {
					padding: 13px 13px 13px 22px;
				}
			}

			.tab.modify-product {
				padding-right: 23px;

				.icon {
					padding: 13px 13px 13px 22px;
				}
			}

			.selected {
				background-color: #292729;
				border-color: #292729;
				color: white;
			}
		}

		.content {
			height: 250px;
			background-color: white;

			border-bottom-left-radius: ${theme.borderRadius.extraRound};
			border-bottom-right-radius: ${theme.borderRadius.extraRound};

			border-top: 1px solid #e4e5e9;
			box-shadow: 0px -2px 8px -2px rgba(0, 0, 0, 0.2);
		}
	}
`
