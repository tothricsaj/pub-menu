import React from 'react'

import style from './Modal.css';

export default function Modal(props) {
	return (
		<div className={style.wrapper}>
			<span onClick={props.closeModal}>X</span>
			{props.children}
		</div>
	)
}
