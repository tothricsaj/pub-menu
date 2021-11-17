import React from 'react'

import style from './Modal.css';

export default function Modal(props) {

	const handleClick = e => {
		e.stopPropagation();
		props.closeModal()
	}

	return (
		<div className={style.wrapper}>
			<span onClick={handleClick}>X</span>
			{props.children}
		</div>
	)
}
