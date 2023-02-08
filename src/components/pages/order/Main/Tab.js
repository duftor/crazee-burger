import React from "react"
import styled from "styled-components"
import { theme } from "../../../../theme/index"

export default function Tab({ icon, label, isSelected, onClick }) {
	return (
		<TabStyled onClick={onClick} className={`${isSelected ? "selected" : ""}`}>
			{icon && icon}
			{label && <span>{label}</span>}
		</TabStyled>
	)
}

const TabStyled = styled.div`
	z-index: 2;
	border: 1px solid red;

	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${theme.colors.white};

	margin-right: 1px;

	background: #ffffff;
	border-width: 1px 1px 2px 1px;
	border-style: solid;
	border-color: #e4e5e9;
	box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
	border-radius: 5px 5px 0px 0px;

	color: ${theme.colors.greySemiDark};
	font-weight: 400;
	font-size: 16px;

	cursor: pointer;

	padding: 13px 22px;

	/* .selected {  // Marche pas..
        background-color: ${theme.colors.background_dark};
        border-color: ${theme.colors.background_dark};
        color: white;
    }

    .selected:hover {
        border-bottom-color: ${theme.colors.background_dark};
    } */

	:hover {
		border-bottom-color: ${theme.colors.white};
		text-decoration: underline;
	}
`
