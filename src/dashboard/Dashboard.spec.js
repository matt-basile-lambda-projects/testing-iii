//Test away!
import React from 'react';
import { render, fireEvent, queryByText } from 'react-testing-library';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard'

describe('Display Component', () => {
it('matches snapshot', ()=>{
    const snap = renderer.create(<Dashboard/>)
    expect(snap.toJSON()).toMatchSnapshot();
})
describe('toggleClosed()', ()=>{
    it('show closed on Close Gate Btn', ()=>{
        const { getByText, queryByText } = render(<Dashboard />);
        const closeBtn = getByText(/close gate/i);
        expect(queryByText(/closed/i)).toBeFalsy();
        fireEvent.click(closeBtn);
        expect(queryByText(/closed/i)).toBeTruthy(); 
    })
    it('show Locked on Lock Gate Btn', ()=>{
        const { getByText, queryByText } = render(<Dashboard />);
        const lockBtn = getByText(/lock gate/i);
        expect(queryByText(/ locked/i)).toBeFalsy();
        fireEvent.click(lockBtn);
        expect(queryByText(/locked/i)).toBeTruthy(); 
    })
    it('show UnLocked on UnLock Gate Btn', ()=>{
        const { getByText, queryByText } = render(<Dashboard/>);
        const closeBtn = getByText(/close gate/i)
        fireEvent.click(closeBtn);
        const lockBtn = getByText(/lock gate/i);
        fireEvent.click(lockBtn);
        const unlockBtn = getByText(/unlock gate/i);
        expect(queryByText(/unlocked/i)).toBeFalsy();
        fireEvent.click(unlockBtn);
        expect(queryByText(/unlocked/i)).toBeTruthy(); 
    })
})
  
})

