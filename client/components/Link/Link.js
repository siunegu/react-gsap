import React from 'react';
import PropTypes from 'prop-types';
import './Link.css';

export default function Link({ title, url }) {
  return <a href={url} className="link"><div className="link__title">{title}</div></a>;
}

Link.defaultProps = {
  title: 'This is a link title.',
  url: '#'
};

Link.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
};
