// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';

// import App from '../index'
import Display from './Display';
import Controls from '../controls/Controls'

describe('Display Component', () => {
it('matches snapshot', ()=>{
    const snap = renderer.create(<Display/>)
    expect(snap.toJSON()).toMatchSnapshot();
})
// describe('toggleClosed()', ()=>{
//     it('close lock', ()=>{
//         const
//         const { queryByText } = render(<Display />);
//         const { getByText } = render(<Controls />);

//         const button = getByText(/close gate/i);
//         expect(queryByText(/closed/i)).toBeFalsy();
  
//         fireEvent.click(button);
//         expect(queryByText(/closed/i)).toBeInTheDocument(); 
//     })
// })
  
})

