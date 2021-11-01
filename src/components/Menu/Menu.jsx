import React, { useState } from 'react';

import MenuElement from '../MenuElement/MenuElement';
import AddMenuModal from '../AddMenuModal/AddMenuModal'

export default function Menu(props) {
	const [showModal, setShowModal] = useState(false);

	const showModalFn = () => {
		// setShowModal(!showModal);
		console.log('foo bar baz');
		console.log(showModal);
	}

	return (
		<div>
			<ul>
				{
					props.menuList.map((el, i) => <MenuElement menuInfo={el} key={i} />)
				}
			</ul>

			<button onClick={() => {console.log('clicked')}}>Add menu</button>
			{
				showModal
					? <AddMenuModal />
					: null
			}
		</div>
	)
}
