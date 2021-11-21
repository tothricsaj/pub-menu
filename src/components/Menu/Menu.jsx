import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMenu, initMenu, selectMenuList }  from './MenuSlice'

import MenuElement from '../MenuElement/MenuElement';
import MenuInput from "../MenuInput/MenuInput";

import style from './Menu.css';

export default function Menu() {
	const dispatch = useDispatch();
	const [showModal, setShowModal] = useState(false);

	let	menuList = useSelector(selectMenuList);

	const addNewMenu = (newMenu) => {
		dispatch(addMenu(newMenu));
	}

	useEffect(() => {
		if(localStorage.getItem('menuList')) {
			dispatch(initMenu(JSON.parse(localStorage.menuList)));
		}
	}, []);

	return (
		<div className={style.wrapper}>
			<ul>
				{
					menuList.map((el) => <MenuElement menuInfo={el} key={el.id} />)
				}
			</ul>

			<button onClick={() => setShowModal(true)} className="pub-button">Add menu</button>
			{
				showModal && 
					<MenuInput
						changeData={addNewMenu}
						closeModal={() => setShowModal(false)}
					/>
			}
		</div>
	)
}
