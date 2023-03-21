import React from "react"
import styled from "styled-components"
import { theme } from "../../../../../../../theme/index"

export default function ImagePreview({ imageSource, title }) {
	return (
		<ImagePreviewStyled>
			{imageSource ? (
				<img src={imageSource} alt={title} />
			) : (
				<div className={`no-img-div ${!imageSource && "has-border"}`}>
					Aucune image
				</div>
			)}
		</ImagePreviewStyled>
	)
}

const ImagePreviewStyled = styled.div`
	grid-area: 1 / 1 / 4 / 2;
	box-sizing: border-box;

	width: 100%;
	height: 120px;

	display: flex;
	align-items: center;
	justify-content: center;
	padding-right: 20px;

	.no-img-div {
		font-weight: ${theme.fonts.weights.regular};
		font-size: ${theme.fonts.size.P0};
		line-height: 24px;
		color: ${theme.colors.greySemiDark};
	}
	.has-border {
		border: 1px solid ${theme.colors.greyLight};
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: ${theme.borderRadius.round};
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`
