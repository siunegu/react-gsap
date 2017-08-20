import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Nav from './Nav/Nav';

import './App.css';

export class App extends PureComponent {
  render() {
    const { links } = this.props;
    return (<div>
      <Nav links={links} />
    </div>);
  }
}

App.defaultProps = {
  links: [{ title: 'a Link item.' }]
};

App.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }))
};

const mapStateToProps = state => ({
  links: state.links
});

const mapDispatchToProps = dispatch => ({ /* do nothing */ });

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
