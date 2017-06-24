import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe('App', () => {
  context('default', () => {
    let wrapper;
    const props = {};

    beforeEach(() => {
      wrapper = shallow(<App {...props} />);
    });

    it('should render with Hello World', () => {
      expect(wrapper).to.have.length(1);
    });
  });
});
