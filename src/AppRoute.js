import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AppLayout from './components/layout/layout';
import List from './screens/list';
import Form from './screens/form';

class AppRouter extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentWillMount() {
    console.log(this.props)
  }

 

  render() {
    
    return (
      <Switch>
        <Route exact path="/" render={ (props)=><AppLayout {...props} settings={this.props.settings}><List></List></AppLayout> } />
        <Route path="/add" render={ (props)=><AppLayout {...props} settings={this.props.settings}><Form></Form></AppLayout> } />
        <Route path="/edit" render={ (props)=><AppLayout {...props} settings={this.props.settings}><Form></Form></AppLayout> } />
        <Redirect to="/" />
      </Switch>
    )
  }
}


export default AppRouter