import React from 'react';
import { render, fireEvent, screen } from './test-util'

import Menu from '../Menu';

describe('Menu', () => {
	const MENU_LIST = [
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

	it('it should render list into a ul', async () => {

		render(<Menu />);
		const listElement = await screen.getByRole('list');
		// const headingElement = screen.getByText(/my header/i);
		expect(listElement).toBeInTheDocument();
	});

	// describe('Add menu button', () => {
	// 		it('it should render Add menu button', () => {
	// 			render(<Menu />);
	// 			const addMenuBtn = screen.getByText(/add menu/i)
	// 			expect(addMenuBtn).toBeInTheDocument();
	// 	});	

	// 	// it('should render AddMenuModal after fired click', () => {
	// 	// 		render(<Menu menuList={ MENU_LIST } />);			
	// 	// 		const addMenuBtn = screen.getByText(/add menu/i);
	// 	// 		const addMenuModal = screen.getByTestId("add-menu-modal");

	// 	// 		fireEvent.click(addMenuBtn);

	// 	// 		expect(addMenuModal).toBeInTheDocument();
	// 	// });
	// });
});