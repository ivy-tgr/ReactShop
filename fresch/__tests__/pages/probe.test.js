import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../../pages/contact';


test('Jest is working', () => {
    expect(true).toBe(true);
});

test ('Test if the probe page is rendered', () => {
    render(<Contact />);
});