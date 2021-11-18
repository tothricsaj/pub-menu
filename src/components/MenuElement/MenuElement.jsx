import React, { useState } from 'react'

import EditModal from './EditModal/EditModal'
import Modal from "../Modal/Modal";
import MenuDetailPage from "./MenuDetailPage/MenuDetailPage";

export default function MenuElement(props) {
	const [showEditModal, setShowEditModal] = useState(false);
	const [showMDP, setShowMDP] = useState(false); // MDP is Menu Detail Page

	const showEditClick = e => {
		e.stopPropagation();
		setShowEditModal(true)
	}

	return (
		<li onClick={() => setShowMDP(true)}>
			{ props.menuInfo.name } { props.menuInfo.price }
			<button onClick={showEditClick}>Edit</button>
			
			{showEditModal
				&& <EditModal
						menuId={props.menuInfo.id}
						name={props.menuInfo.name}
						price={props.menuInfo.price}
						removeModal={() => setShowEditModal(false)}
			/>}

			{showMDP
				&& <Modal closeModal={() => setShowMDP(false)}>
					<MenuDetailPage />
				</Modal>
			}
		</li>
	)
}
