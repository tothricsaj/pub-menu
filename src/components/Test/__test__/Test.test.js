import { render, screen } from '@testing-library/react';
import React from 'react';
import Test from '../Test'

const EXPECTED_VALUE = 'Test title';

describe('Test component to see config', () => {
	it('should render title with props text', () => {
		render(<Test title={EXPECTED_VALUE} />);
		const headingElement = screen.getByText(/Test title/i);

		expect(headingElement).toBeInTheDocument();	
	});
});