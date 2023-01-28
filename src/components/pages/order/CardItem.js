import React from "react"
import styled from "styled-components"

export default function CardItem({ item }) {
	return (
		<CardItemStyled
			className="card"
			key={item.id + item.imageSource + item.price}
		>
			<img src={item.imageSource} alt={item.title} />
			<h1>{item.title}</h1>
			<div className="bottom-info">
				<div className="price">{item.price}</div>
				<button>Ajouter</button>
			</div>
		</CardItemStyled>
	)
}

const CardItemStyled = styled.div`
	border: 1px solid red;
	height: 330px;
	width: 240px;
	margin: 15px auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		width: 100%;
		overflow: hidden;
	}

	.bottom-info {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
`
