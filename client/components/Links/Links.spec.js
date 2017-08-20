import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

const Link = props => <div {...props} />;
const Links = proxyquire('./Links', {
  '../Link/Link': Link
}).default;

describe('Links', () => {
  context('default', () => {
    let wrapper;
    const props = { links: [{ title: 'a test link.' }, { title: 'another test link.' }] };

    beforeEach(() => {
      wrapper = shallow(<Links {...props} />);
    });

    it('should render the same length of Link components passed in ', () => {
      expect(wrapper.find('Link')).to.have.length(props.links.length);
    });
  });
});
