import React from 'react'

export default function MenuElement(props) {
	return (
		<li>{ props.menuInfo.name } { props.menuInfo.price }</li>
	)
}
