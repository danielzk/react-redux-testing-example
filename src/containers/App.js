import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../actionCreators'
import UsersPanel from '../components/UsersPanel'

export class App extends React.Component {
  render() {
    return (
      <div>
        <UsersPanel {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({...state})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
