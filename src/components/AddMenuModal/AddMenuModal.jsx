import React, { useRef } from "react"

export default function AddMenuModal(props) {
	const nameRef = useRef(null);
	const priceRef = useRef(null);

	const addMenu = () => {
		let newName = nameRef.current.value;
		let newPrice = priceRef.current.value;

		props.addNewMenu({name: newName, price: newPrice});

		nameRef.current.value = null;
		priceRef.current.value = null;

	};

	return (
		<div data-testid="add-menu-modal">
			<div>
				<input type="text" placeholder="Name" ref={nameRef} />
				<input type="text" placeholder="price" ref={priceRef} />

				<button role="addBtn" onClick={addMenu}>Add</button>
			</div>
		</div>
	)
}
