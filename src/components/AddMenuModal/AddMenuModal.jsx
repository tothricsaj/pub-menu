import React from "react"

export default function AddMenuModal() {
	return (
		<div data-testid="add-menu-modal">
			<div>
				<input type="text" placeholder="Name" />
				<input type="text" placeholder="price" />

				<button role="addBtn">Add</button>
			</div>
		</div>
	)
}
