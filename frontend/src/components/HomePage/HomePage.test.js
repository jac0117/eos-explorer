import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('Home Page', () => {

  it('renders without crashing', () => {
    shallow(<HomePage/>);
  });

});