import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

const Comments = () => <div />;
const AppContainer = proxyquire('./App', {
  '../components/Comments/Comments': Comments
}).default;

describe('App', () => {
  context('default', () => {
    let wrapper;
    const props = {};
    const state = {
      comments: []
    };
    /* @note~
    This is a pretty basic way of doing it,
    would recommend redux-mock-store */
    const store = {
      getState: sinon.stub().returns(state),
      subscribe: sinon.stub(),
      dispatch: sinon.stub()
    };

    beforeEach(() => {
      wrapper = shallow(<AppContainer store={store} {...props} />);
    });

    it('should render with Hello World', () => {
      expect(wrapper).to.have.length(1);
    });
  });
});
