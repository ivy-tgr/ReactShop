import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../../pages/contact';
import Shop from '../../pages/shop';
import { SessionProvider } from 'next-auth/react';


test('Jest is working', () => {
    expect(true).toBe(true);
});


test ('Test if the probe page is rendered', () => {
    render(
        <SessionProvider session={null}>
            <Contact />
        </SessionProvider>
    );
}); 

test ('Test if the shop page is rendered', () => {
    render(
        <SessionProvider session={null}>
            <Shop />
        </SessionProvider>
    );
});
