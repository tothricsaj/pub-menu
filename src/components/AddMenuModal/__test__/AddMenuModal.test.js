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
});