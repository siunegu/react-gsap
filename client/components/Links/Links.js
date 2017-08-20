import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import GSAP from 'react-gsap-enhancer';

import Link from '../Link/Link';
import enterFadeUp from '../../animations/enterFadeUp';

import './Links.css';

export class Links extends PureComponent {
  componentDidMount() {
    this.addAnimation(enterFadeUp);
  }

  render() {
    const { links } = this.props;
    return <div className="links">{links.map(link => <Link key={uuidv1()} {...link} />)}</div>;
  }
}

Links.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }))
};

Links.defaultProps = {
  links: [{ title: 'a default link item' }]
};


export default GSAP()(Links);

