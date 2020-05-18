import React from 'react';
import { render } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';

const plants = [
	{
		name: 'Rubber Fig',
		description: 'South Asia ',
		img: 'https://somefakeurl.com',
		light: 'Sun',
		difficulty: 'easy',
		id: 968875468797,
	},
	{
		name: 'Areca Palm',
		description: 'Flowering Palm.',
		img: 'https://somefakeurl.com',
		light: 'Mixed',
		difficulty: 'Medium',
		id: 4558795567223,
	},
	{
		name: 'Dumb Canes',
		description: 'Tropical Flowering Plant.',
		img: 'https://somefakeurl.com',
		light: 'Mixed',
		difficulty: 'Easy',
		id: 266597765987,
	},
];

test('displays plants in cart', () => {
	const { queryAllByTestId } = render(<ShoppingCart cart={plants} />);

	const plantName = queryAllByTestId('plantName');

	expect(plantName.length).toBe(3);
	expect(plantName[1].textContent).toBe('Areca Palm');
});
