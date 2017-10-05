import React from 'react'
import { initStore } from '../statemanagement/store'
import withRedux from 'next-redux-wrapper'

import Layout from '../components/shared/Layout';
import Landing from '../components/main/Landing'; 

class Index extends React.Component {
  static getInitialProps ({ store, pathname, query, asPath }) {
    // console.log('getInitialProps');
  }

  render () {
    return (
      <Layout>
        <Landing />
      </Layout>
    )
  }
}

export default withRedux(initStore)(Index)