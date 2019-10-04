import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Design from '../design';

let tools;

beforeEach(() => {
    rtl.cleanup();
    tools = rtl.render(<Design/>);
});

describe('Design Component', () => {
    it('displays welcome message', () => {
        const welcomeMessageText = tools. queryByText(/click/i);
        expect(welcomeMessageText).toBeInTheDocument();
    });

})