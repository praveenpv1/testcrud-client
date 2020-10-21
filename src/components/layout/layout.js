import React, { Component } from 'react'; 
import { Col } from 'react-bootstrap';
import Headbar from '../header/headbar';


class AppLayout extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const { children } = this.props;
    console.log(this.props)
    let childView;
    React.Children.forEach(children, element => {
      if(!React.isValidElement(element)) return
      switch(this.props.location.pathname) {
        default:
          childView = React.cloneElement(element, {settings : this.props.settings, history: this.props.history});
          break;
      }
      
    })
    return(
      <Col lg={12} sm={12} xs={12} md={12} xl={12} >
        <Headbar />
        { childView }
      </Col>
    )
  }
}



export default AppLayout