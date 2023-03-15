import React from "react"
import styled from "styled-components"
import { theme } from "../../theme/index"

export default function Tab({ Icon, label, onClick, className }) {
	return (
		<TabStyled onClick={onClick} className={className}>
			{Icon && <div className="icon">{Icon}</div>}
			{label && <div className="label">{label}</div>}
		</TabStyled>
	)
}

const TabStyled = styled.div`
	padding: 0 22px;
	height: 35px;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;

	color: ${theme.colors.greySemiDark};
	font-size: 16px;

	position: relative;
	left: 5%;
	top: 1px;

	border-width: 1px 1px 2px 1px;
	border-style: solid;
	border-color: #e4e5e9;
	background-color: ${theme.colors.white};
	box-shadow: ${theme.shadows.subtle};
	border-radius: 5px 5px 0px 0px;

	.icon {
		display: flex;
	}

	.label {
		margin-left: 13px;
	}

	:hover {
		border-bottom: 2px solid ${theme.colors.white};
		text-decoration: underline;
	}
`
