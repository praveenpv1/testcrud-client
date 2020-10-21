import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as UserActions from '../actions/userActions';
import ErrorMessage from '../components/error/error';
class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      index: '',
      name: '',
      email: '',
      error: ''
    }
  }

  componentWillMount() {
    console.log(this.props)
    this.setFormState(this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setFormState(nextProps)
  }

  setFormState = (formProps) => {
    if(formProps.history.location.pathname === '/edit') {
      if(formProps.history.location.state) {
        console.log(formProps)
        if(Object.keys(formProps.user).length) {
          this.setState({
            ...this.state,
            id: formProps.history.location.state.id,
            index: formProps.history.location.state.index,
            name: formProps.user.name,
            email: formProps.user.email
          })
        } else {
          console.log(formProps.user)
          formProps.getUsersById(formProps.settings.http.api, formProps.settings.http.headers, formProps.history.location.state.id)
        }
      } else {
        formProps.history.push('/')
      }
    }
  }

  formChange = (e) => {
    console.log(e.target.id, e.target.value)
    this.setState({
      ...this.state,
      [`${e.target.id}`] : e.target.value
    })
  }

  formSubmit = (e) => {
    const { id, name, email } = this.state;
    if(name && email) {
      let data = {
        name : name,
        email: email
      }
      if(this.props.history.location.pathname === '/edit') {
        this.props.updateUser(this.props.settings.http.api, this.props.settings.http.headers, data, id);
      } else {
        this.props.addUser(this.props.settings.http.api, this.props.settings.http.headers, data);
      }
      this.props.history.push('/')
    } else {
      this.setState({
        ...this.state,
        error : 'All fields are required'
      })
    }
    
  }

  formCancel = (e) => {
    this.props.history.push('/')
  }

  render() {
    return(
      <Row>
        <Col lg={12} sm={12} xs={12} md={12} xl={12} className="text-left" >
          <div className="form-group">
            <label ><b>Name</b></label>
            <input type="text" className="form-control" id="name" placeholder="Enter Name" value={this.state.name} onChange={this.formChange} />
          </div>
          <div className="form-group">
            <label ><b>Email</b></label>
            <input type="email" className="form-control" id="email" placeholder="Enter Email" value={this.state.email} onChange={this.formChange} />
          </div>
          <div className="form-group">
            <ErrorMessage error={this.state.error} />
          </div>
          <div className="form-group">
            <button className="btn btn-info" onClick={this.formSubmit} >Submit</button>
            <button className="btn btn-danger" onClick={this.formCancel} >Cancel</button>
          </div>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userReducer.userById
  }
}

const mapDispatchToProps = {
  ...UserActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Form)