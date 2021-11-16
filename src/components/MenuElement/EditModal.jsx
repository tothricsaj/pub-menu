import React from 'react'

export default function EditModal({name, price, removeModal}) {

	const closeModal = () => removeModal()

	return (
		<div data-testid="edit-modal">
			<span onClick={closeModal} style={{cursor: "pointer"}}>X</span>
			<input type="text" defaultValue={name} />
			<input type="text" defaultValue={price} />
			<button>Edit</button>
		</div>
	)
}
