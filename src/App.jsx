import React from 'react';

import Menu from './components/Menu/Menu';

const menuList = [
	{
		name: 'menu 1',
		price: '11.99'
	},
	{
		name: 'menu 2',
		price: '12.99'
	},	{
		name: 'menu 3',
		price: '13.99'
	},
];

const App = () => (
  <Menu menuList={menuList} />
);

export default App;
