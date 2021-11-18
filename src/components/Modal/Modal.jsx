import React from 'react'

import style from './Modal.css';

export default function Modal(props) {

	const handleClick = e => {
		e.preventDefault();
		e.stopPropagation();
		props.closeModal()
	}

	return (
		<div onClick={handleClick} className={style.wrapper}>
			<span onClick={handleClick} className={style.close}>X</span>
			{props.children}
		</div>
	)
}
