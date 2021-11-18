import React from 'react'

export default function MenuDetailPage(props) {
	const {menuId, name, price} = props.menuInfos;
	console.log(props.menuInfos);
	return (
		<div>
			<h2>
				{name} - {price}
			</h2>
		</div>
	)
}
