import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import './App.css';

const comments = [
  'some comment',
  'so funny this comment',
  'same as above'
];

const getComments = () => (
  comments.map(comment => <Comment key={uuidv1()} comment={comment} />)
);

export function Comment({ comment }) {
  return <div>{comment}</div>;
}

export default function App() {
  return <div>{getComments()}</div>;
}

Comment.defaultProps = {
  comment: ''
};

Comment.propTypes = {
  comment: PropTypes.string
};
