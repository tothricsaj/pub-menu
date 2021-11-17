import React, { useRef } from "react";
import style from "./AddMenuModal.module.css";

export default function AddMenuModal(props) {
	const nameRef = useRef(null);
	const priceRef = useRef(null);

	const addMenu = () => {
		let newName = nameRef.current.value;
		let newPrice = priceRef.current.value;

		props.addNewMenu({
			id: Math.ceil(Math.random() * 100000),
			name: newName,
			price: newPrice
		});

		nameRef.current.value = null;
		priceRef.current.value = null;

		closeModal();

	};

	const closeModal = () => props.removeModal();

	return (
		<div data-testid="add-menu-modal">
			<div className={style.menuInputs}>
				<input type="text" placeholder="Name" ref={nameRef} />
				<input type="text" placeholder="price" ref={priceRef} />

				<button role="addBtn" onClick={addMenu}>Add</button>
			</div>
		</div>
	)
}
