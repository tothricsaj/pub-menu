import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import EditModal from '../EditModal'

describe('<EditMdal />', () => {
	it('should render menu info inside inputs', () => {
		render(<EditModal name="Soup" price="12.99" />);

		expect(
			screen.getByDisplayValue("Soup")
		).toBeInTheDocument();

		expect(
			screen.getByDisplayValue("12.99")
		).toBeInTheDocument();
	});
});