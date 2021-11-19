import React, { useRef, useEffect } from "react";
import style from "./MenuInput.css";

import Modal from "../Modal/Modal";

export default function MenuInput(props) {
	const nameRef = useRef(null);
	const priceRef = useRef(null);

	let name;
	let price;

	useEffect(() => {
		name = props.name || nameRef.current.value;
		price = props.price || priceRef.current.value;
	});

	const changeData = () => {
		// let name = nameRef.current.value;
		// let price = priceRef.current.value;

		name = nameRef.current.value;
		price = priceRef.current.value;

		const data = {
			id: !!props.menuId ? props.menuId : Math.ceil(Math.random() * 100000),
			name: name,
			price: price
		}

		console.log(data);

		props.changeData(data);

		nameRef.current.value = null;
		priceRef.current.value = null;

		// closeModal();

	};

	// const closeModal = () => props.removeModal();
	const handlePropagation = e => e.stopPropagation();

	return (
		<Modal closeModal={props.closeModal}>
			<div data-testid="add-menu-modal">
				<div className={style.menuInputs}>
					<input type="text" placeholder="Name" onClick={handlePropagation} ref={nameRef} defaultValue={props.name && props.name}/>
					<input type="text" placeholder="price" onClick={handlePropagation} ref={priceRef} defaultValue={props.price && props.price} />

					<button role="addBtn" onClick={changeData}>Add</button>
				</div>
			</div>
		</Modal>
	)
}
