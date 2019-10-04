import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Player from '../players';

let tools;

beforeEach(() => {
    rtl.cleanup();
    tools = rtl.render(<Player/>);
});

describe('Players Component', () => {
    it('has header being displayed', () => {
        // const pageHeaderText = tools.queryByTestId('playerDisplay');
        const pageHeader = tools.queryByText(/womens world cup/i);


        expect(pageHeader).toBeInTheDocument();
    });


})