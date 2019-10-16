import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Player from '../players';

let tools;

beforeEach(() => {
    rtl.cleanup();
    tools = rtl.render(<Player name="John" country="UK" searches="2"/>);
});

describe('Players Component', () => {
    // it('has header being displayed', () => {

   

    it("shows player name", () => {
        const accurateText = tools.queryByText(/John/i);
        expect(accurateText).toBeInTheDocument();
      });
        // const userName = 'WOMENS WORLD CUP';

        // expect(rtl.render(<Player userName={userName} />));
        // const pageHeaderText = tools.queryByTestId('playerDisplay');
        // const pageHeader = tools.queryByText(/womens world /ig);
        // expect(pageHeader).toBeInTheDocument();
        // // expect(pageHeaderText).toBeInTheDocument();

    });



