import { render, screen } from '@testing-library/react';
import React from 'react';
import Menu from '../Menu';

const MENU_LIST = [
	"Food1",
	"Food2",
	"Food3"
]

describe('Menu', () => {
	it('it should render list into a ul', () => {
		render(<Menu menuList={ MENU_LIST } />);
		const listElement = screen.getByRole('list');
		// const headingElement = screen.getByText(/my header/i);
		expect(listElement).toBeInTheDocument();
	});
});