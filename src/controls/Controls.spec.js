// Test away!
import React from 'react';
import { render, fireEvent, queryByText } from 'react-testing-library';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';



describe('<Controls />', () => {
        it('should call the toggleClosed function passed as prop', () => {
          const toggleClosed = jest.fn();
      
          const { getByText } = render(<Controls toggleClosed={toggleClosed} />);
      
          fireEvent.click(getByText(/close gate/i));
          expect(toggleClosed).toHaveBeenCalled();
          
        });
      });



