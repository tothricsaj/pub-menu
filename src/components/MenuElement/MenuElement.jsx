import React from 'react'

export default function MenuElement(props) {
	return (
		<li onClick={() => console.log(props.menuInfo.name)}>
			{ props.menuInfo.name } { props.menuInfo.price }
			<button>Edit</button>
		</li>
	)
}
