import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

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
	const mockStore = configureStore();
	let store, wrapper;


	it('it should render list into a ul', () => {

		store = mockStore(MENU_LIST);

		render(<Provider store={store}><Menu /></Provider>);
		const listElement = screen.getByRole('list');
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