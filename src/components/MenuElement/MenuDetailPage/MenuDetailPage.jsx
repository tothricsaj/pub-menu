import React from 'react'

export default function MenuDetailPage(props) {
	const {id, name, price, ingredients, quantity, description} = props.menuInfos;
	return (
		<div>
			<h2>
				{name}
			</h2>
			<div>
				{ingredients.map(el => <span key={id + "MDP"}>{el}, </span>)}
			</div>
			<p>{quantity}</p>
			<p>{price}$</p>

			<div>
				{description}
			</div>
		</div>
	)
}
