import React from 'react'

export default function EditModal({name, price}) {
	return (
		<div data-testid="edit-modal">
			<input type="text" defaultValue={name} />
			<input type="text" defaultValue={price} />
		</div>
	)
}
