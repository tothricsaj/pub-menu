import { render, screen } from '@testing-library/react';
import React from 'react';

import AddMenuModal from '../AddMenuModal'

describe('AddMenuModal', () => {
	it('should render name and price inputs', () => {
		render(<AddMenuModal />);
		const nameInput = screen.getByPlaceholderText(/name/i);
		const priceInput = screen.getByPlaceholderText(/price/i);

		expect(nameInput).toBeInTheDocument();
		expect(priceInput).toBeInTheDocument();
	});

	it('should render Add button', () => {
		render(<AddMenuModal />);
		const addBtn = screen.getByRole('addBtn');

		expect(addBtn).toBeInTheDocument();
	});

	describe('AddMenuModal Style', () => {
		it('should be full screen shaded modal', () => {
			render(<AddMenuModal />);		
			const wrapperDiv = screen.getByTestId('add-menu-modal');

			expect(wrapperDiv).toHaveStyle({
				backgroundColor: 'rgba(0,0,0,0.5)',
				width: '100vw',
				height: '100vh',
			})
		});
	});
});