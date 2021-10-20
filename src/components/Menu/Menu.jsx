import React from 'react';

import MenuElement from '../MenuElement/MenuElement';

export default function Menu(props) {
	return (
		<div>
			<ul>
				{
					props.menuList.map((el, i) => <MenuElement menuInfo={el} key={i} />)
				}
			</ul>
		</div>
	)
}
