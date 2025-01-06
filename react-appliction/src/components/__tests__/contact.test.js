import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

test('checks if heading is present in the component', () => {
    render(<Contact />);
    const headingElement = screen.getAllByRole("textbox");
    expect(headingElement.length).toBe(2);
});
