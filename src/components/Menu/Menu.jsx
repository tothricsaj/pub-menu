import React from 'react'

export default function Menu(props) {
	return (
		<div>
			<ul>
				{
					props.menuList.map((el, i) => <li key={i}>{el}</li>)
				}
			</ul>
		</div>
	)
}
