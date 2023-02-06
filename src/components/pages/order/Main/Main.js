import React, { useContext } from "react"
import styled from "styled-components"
import { theme } from "../../../../theme/index"
import Menu from "./Menu"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import AdminPanelContext from "../../../../context/AdminPanelContext"

export default function Main() {
	const {
		isAdminMode,
		isPanelVisible,
		setIsPanelVisible,
		tabIndex,
		setTabIndex,
	} = useContext(AdminPanelContext)

	const toggleAdminPanel = () => {
		setIsPanelVisible(!isPanelVisible)
	}

	const onTab1Click = () => {
		setTabIndex(0)
	}
	const onTab2Click = (e) => {
		setTabIndex(1)
	}
	return (
		<MainStyled>
			{/* <div className="cart">CART</div> */}
			<Menu />
			{isAdminMode && (
				<div className="admin-panel">
					<div className="tabs">
						<div
							className={`tab toggle ${!isPanelVisible && "selected"}`}
							onClick={toggleAdminPanel}
						>
							{isPanelVisible ? (
								<FiChevronDown className="icon" />
							) : (
								<FiChevronUp className="icon" />
							)}
						</div>
						<div
							className={`tab add-product ${tabIndex === 0 ? "selected" : ""}`}
							onClick={onTab1Click}
						>
							<AiOutlinePlus className="icon" />
							<span className="label">Ajouter un produit</span>
						</div>
						<div
							className={`tab modify-product ${
								tabIndex === 1 ? "selected" : ""
							}`}
							onClick={onTab2Click}
						>
							<MdModeEditOutline className="icon" />
							<span className="label">Modifier un produit</span>
						</div>
					</div>
					{isPanelVisible && (
						<div className="content">
							{tabIndex === 0 ? (
								<div className="content-add-product">Ajouter un produit</div>
							) : (
								<div className="content-modify-product">
									Modifier un produit
								</div>
							)}
						</div>
					)}
				</div>
			)}
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
				background-color: ${theme.colors.white};

				margin-right: 1px;

				border-width: 1px 1px 2px 1px;
				border-style: solid;
				border-color: ${theme.colors.greyLight};
				box-shadow: 0px -2px 8px -2px rgba(0, 0, 0, 0.1);
				border-radius: 5px 5px 0px 0px;

				color: ${theme.colors.greySemiDark};
				font-weight: 400;
				font-size: 16px;

				cursor: pointer;
			}
			.tab:hover {
				border-bottom-color: white;
				text-decoration: underline;
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
				background-color: ${theme.colors.background_dark};
				border-color: ${theme.colors.background_dark};
				color: white;
			}
			.selected:hover {
				border-bottom-color: ${theme.colors.background_dark};
			}
		}

		.content {
			height: 250px;
			background-color: ${theme.colors.white};

			border-bottom-left-radius: ${theme.borderRadius.extraRound};
			border-bottom-right-radius: ${theme.borderRadius.extraRound};

			border-top: 1px solid ${theme.colors.greyLight};
			box-shadow: 0px -2px 8px -2px rgba(0, 0, 0, 0.2);
		}
	}
`
