import React, { useState } from 'react'
import EditModal from './EditModal/EditModal'

export default function MenuElement(props) {
	const [showEditModal, setShowEditModal] = useState(false);

	return (
		<li>
			{ props.menuInfo.name } { props.menuInfo.price }
			<button onClick={() => setShowEditModal(true)}>Edit</button>
			
			{showEditModal
				&& <EditModal
						menuId={props.menuInfo.id}
						name={props.menuInfo.name}
						price={props.menuInfo.price}
						removeModal={() => setShowEditModal(false)}
			/>}
		</li>
	)
}
