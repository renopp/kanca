// @flow
import React from 'react';
import PropTypes from 'prop-types';
import './app.css';
import Header from 'domain/layout/component/Header';
import Sidebar from 'domain/layout/component/Sidebar';
import Aside from 'domain/layout/component/Aside';
import Footer from 'domain/layout/component/Footer';
import { connect } from 'react-redux';
import Auth from 'domain/user/component/auth';

const mapStateToProps = state => ({
  profile: state.user.profile,
  pathname: state.routing.locationBeforeTransitions.pathname,
});

class App extends React.Component {

  render() {
    const children = this.props.children;

    return (
      <Auth>
        <div className="app">
          <Header />
          <div className="app-body">
            <Sidebar />
            <main className="main" style={{ paddingTop: '20px' }}>
              <div className="container-fluid">
                {children}
              </div>
            </main>
            <Aside />
          </div>
          <Footer />
        </div>
      </Auth>
    );
  }

}

App.propTypes = {
  profile: PropTypes.object,
  pathname: PropTypes.string,
  children: PropTypes.node,
};

export default connect(mapStateToProps)(App);
