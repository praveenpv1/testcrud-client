import React, { Component } from 'react';
import  { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import AppRouter from './AppRoute'

class App extends Component {
  
  constructor() {
    super();
    this.state = {}
    
  }
  render() {
  
    return (
      <Container fluid={true}>
        <Row className="justify-content-center text-center marg=0">
          <AppRouter {...this.props} />
        </Row>
      </Container>
    )
  }
}

const mapStateToApp = (state) => {
  return {
    settings : state.settingsReducer.settings
  }
}

export default connect(mapStateToApp, null)(App);
