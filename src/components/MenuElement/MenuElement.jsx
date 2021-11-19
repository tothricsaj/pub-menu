import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { editMenu }  from '../Menu/MenuSlice';

import Modal from "../Modal/Modal";
import MenuDetailPage from "./MenuDetailPage/MenuDetailPage";
import MenuInput from "../MenuInput/MenuInput"

export default function MenuElement(props) {
	const [showEditModal, setShowEditModal] = useState(false);
	const [showMDP, setShowMDP] = useState(false); // MDP is Menu Detail Page

	const dispatch = useDispatch();

	const showEditClick = e => {
		e.stopPropagation();
		setShowEditModal(true)
	}

	const edit = (editedMenu) => {
		dispatch(editMenu(editedMenu));
	}

	const menuInfos = {
		menuId: props.menuInfo.id,
		name: props.menuInfo.name,
		price: props.menuInfo.price
	};

	return (
		<li onClick={() => setShowMDP(true)}>
			{ props.menuInfo.name } { props.menuInfo.price }
			<button onClick={showEditClick}>Edit</button>
			
			{showEditModal
				&& <MenuInput
						menuId={props.menuInfo.id}
						name={props.menuInfo.name}
						price={props.menuInfo.price}
						changeData={edit}
						closeModal={() => setShowEditModal(false)}
					/>
			}

			{showMDP
				&& <Modal closeModal={() => setShowMDP(false)}>
						<MenuDetailPage
							menuInfos={menuInfos}
						/>
					</Modal>
			}
		</li>
	)
}
