import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMenu, selectMenuList }  from './MenuSlice'

import MenuElement from '../MenuElement/MenuElement';
import Modal from "../Modal/Modal";
import MenuInput from "../MenuInput/MenuInput";

export default function Menu() {
	const menuList = useSelector(selectMenuList);
	const dispatch = useDispatch();

	const [showModal, setShowModal] = useState(false);

	const addNewMenu = (newMenu) => {
		dispatch(addMenu(newMenu));
	}

	return (
		<div>
			<ul>
				{
					menuList.map((el, i) => <MenuElement menuInfo={el} key={el.id} />)
				}
			</ul>

			<button onClick={() => setShowModal(true)}>Add menu</button>
			{
				showModal && 
				<Modal closeModal={() => setShowModal(false)}>
					<MenuInput
						changeData={addNewMenu}
					/>
				</Modal>
			}
		</div>
	)
}
