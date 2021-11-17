import React, { useRef } from 'react'

import { useDispatch } from 'react-redux';
import { editMenu }  from '../../Menu/MenuSlice'

export default function EditModal({menuId, name, price, removeModal}) {
	const nameRef = useRef(null);
	const priceRef = useRef(null);

	const dispatch = useDispatch();

	const edit = (e) => {
		e.stopPropagation();

		const data = {
			id: menuId,
			data: {
				id: menuId,
				name: nameRef.current.value,
				price: priceRef.current.value
			}
		}
		
		dispatch(editMenu(data));

		closeModal();
	}

	const closeModal = () => removeModal()

	return (
		<div data-testid="edit-modal">
			<span onClick={closeModal} style={{cursor: "pointer"}}>X</span>
			<input type="text" defaultValue={name} ref={nameRef} />
			<input type="text" defaultValue={price} ref={priceRef} />
			<button onClick={edit}>Edit</button>
		</div>
	)
}
