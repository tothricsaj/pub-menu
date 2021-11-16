import { render, fireEvent, screen } from '../../Menu/__test__/test-util'
import React from 'react';
import MenuElement from '../MenuElement';

const MENU_INFO = {
	name: "menu 1",
	price: '12.99'
}

describe('MenuElement', () => {
	it('it should be li element', () => {
		render(<MenuElement menuInfo={ MENU_INFO } />);
		const liElement = screen.getByRole('listitem');

		expect(liElement).toBeInTheDocument();
	})

	it('it should render the menu info (name, price)', () => {
		render(<MenuElement menuInfo={ MENU_INFO } />);
		const name = screen.getByText(/menu 1/i);
		const price = screen.getByText(/12.99/i);

		expect(name).toBeInTheDocument();
		expect(price).toBeInTheDocument();
	});

	it('should render edit button', async () => {
		render(<MenuElement menuInfo={ MENU_INFO } />);	
		const editBtn = screen.getByText(/Edit/i);

		expect(editBtn).toBeInTheDocument();
	});

	it('should render edit modal after fired click event', async () => {
		render(<MenuElement menuInfo={ MENU_INFO } />);	
		const editBtn = screen.getByText(/Edit/i);

		fireEvent.click(editBtn);

		const editModal = await screen.getByTestId('edit-modal');

		expect(editModal).toBeInTheDocument();
	});
});