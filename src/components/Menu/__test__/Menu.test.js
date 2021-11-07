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
		expect(listElement).toBeInTheDocument();
	});

	describe('Add menu button', () => {
			it('it should render Add menu button', () => {
				render(<Menu />);
				const addMenuBtn = screen.getByText(/add menu/i)
				expect(addMenuBtn).toBeInTheDocument();
		});	

		it('should render AddMenuModal after fired click', async () => {
				render(<Menu />);			
				const addMenuBtn = screen.getByText(/add menu/i);
				fireEvent.click(addMenuBtn);
				const addMenuModal = await screen.getByTestId("add-menu-modal");

				expect(addMenuModal).toBeInTheDocument();
		});

		it('should render extended menulist item', async () => {
				render(<Menu />);			
				const addMenuBtn = screen.getByText(/add menu/i);
				fireEvent.click(addMenuBtn);

				const nameInput = await screen.getByPlaceholderText(/name/i);
				const priceInput = await screen.getByPlaceholderText(/price/i);
				const addMenuItemBtn = await screen.getByRole('addBtn');

				fireEvent.change(nameInput, { target: {value: 'test menu item'}});
				fireEvent.change(priceInput, { target: {value: '10'}});
				fireEvent.click(addMenuItemBtn);

				const liElement = await screen.getByText('test menu item 10');

				expect(liElement).toBeInTheDocument();
		});	
	});
});