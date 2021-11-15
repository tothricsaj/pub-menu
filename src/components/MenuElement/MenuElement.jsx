import React, { useState } from 'react'
import EditModal from './EditModal'

export default function MenuElement(props) {
	const [showEditModal, setShowEditModal] = useState(false);

	return (
		<li onClick={() => console.log(props.menuInfo.name)}>
			{ props.menuInfo.name } { props.menuInfo.price }
			<button onClick={() => setShowEditModal(true)}>Edit</button>
			{showEditModal && <EditModal />}
		</li>
	)
}
