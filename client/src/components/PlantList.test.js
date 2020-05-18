import React from 'react';
import * as rtl from '@testing-library/react';
import axios from 'axios';
import PlantList from './PlantList';
import '@testing-library/jest-dom/extend-expect';

//*THIS IS HOW I MAKE A MOCK API TEST TO ENSURE THAT THE API IS IN FACT IS WORKING

//* MAKING THE PROMISE
jest.mock('axios', () => {
	return {
		get: jest.fn(() =>
			Promise.resolve({
				data: {
					plantsData: ['name'],
				},
			})
		),
	};
});

test('Testing Test', () => {
	expect(true).toBeTruthy();
});

//* THIS TESTS TO SEE IF AXIOS API IS WORKING

test('made an api call', async () => {
	const wrapper = rtl.render(<PlantList />);

	await wrapper.findAllByTestId(/plantTest/i);

	expect(axios.get).toHaveBeenCalled();
});
