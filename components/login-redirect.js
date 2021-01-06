import Router from 'next/router';
import { Component } from 'react';

import Layout from './layout';
import createLoginUrl from 'lib/url-helper';

export default class RedirectToLogin extends Component {
  componentDidMount() {
    window.location.assign(createLoginUrl(Router.pathname));
  }

  render() {
    return (
      <Layout>
        <div>Signing you in...</div>
      </Layout>
    );
  }
}
