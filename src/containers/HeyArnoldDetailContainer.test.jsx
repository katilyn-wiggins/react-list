import React from 'react'
import { render, screen } from '@testing-library/react'
import HeyArnoldDetailContainer from './HeyArnoldDetailContainer';
import {MemoryRouter} from 'react-router';

describe('HeyArnoldDetailContainer', () => {
    it('renders a single character to the page', async() => {

        render(<MemoryRouter> 
            <HeyArnoldDetailContainer
                    match={{
                    params: {
                    id: '5da237699734fdcb7bef8f55'
                    }}}
            /> 
            </MemoryRouter>)
        const figure = await screen.findByRole('individual')

        expect(figure).not.toBeEmptyDOMElement();
        // screen.getByText('Loading...')
    }); 
})

