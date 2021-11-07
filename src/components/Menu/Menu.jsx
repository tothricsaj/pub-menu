import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMenu, selectMenuList }  from './MenuSlice'

import MenuElement from '../MenuElement/MenuElement';
import AddMenuModal from '../AddMenuModal/AddMenuModal'

export default function Menu(props) {
	const menuList = useSelector(selectMenuList);
	const dispatch = useDispatch();

	const [showModal, setShowModal] = useState(false);

	const addMenuItem = () => {

	}

	return (
		<div>
			<ul>
				{
					menuList.map((el, i) => <MenuElement menuInfo={el} key={i} />)
				}
			</ul>

			<button onClick={() => setShowModal(true)}>Add menu</button>
			{
				showModal && <AddMenuModal />
			}
		</div>
	)
}
