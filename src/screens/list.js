import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import DataTable from '../components/datatable/dtable';
import * as UserActions from '../actions/userActions';


class List extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
    
  }

  componentWillMount() {
    console.log(this.props)
    this.props.getUsers(this.props.settings.http.api, this.props.settings.http.headers);
  }
  componentWillReceiveProps(nextProps) {
    this.setUsers(nextProps.users)
  }
  setUsers = (Users) => {
    console.log(Users)
    this.setState({
      ...this.state,
      users: Users
    })
  }
  editUser = (UserIndex, UserId) => {
    let user = this.state.users[UserIndex];
    this.props.setUserById(user);
    this.props.history.push({
      pathname: `/edit`,
      state: {index: UserIndex, id: UserId}
    });
  }
  deleteUser = (UserIndex, UserId) => {
    // let user = this.state.users[UserIndex];
    
    let newusers = this.state.users;
    console.log(UserIndex, UserId, newusers)
    newusers.splice(UserIndex, 1);
    this.setState({
      ...this.state,
      users: newusers
    })
    this.props.deleteUser(this.props.settings.http.api, this.props.settings.http.headers, UserId);
  }

  render() {
    const { users } = this.state;
    console.log(users)
    
    let tableFields = ['Name', 'Email', 'Status', 'Action']
    let tableData = users.length ? (
      users.map((usr, i) => {
        return({
          'Name': usr.name,
          'Email': usr.email,
          'Status': [{
            id: 'name',
            status: 'bg-good',
            display: 'label',
            text: usr.status ? 'Active' : ''
          }],
          'Action' : [
            {
              id: 'name',
              type: 'edit',
              status: 'btn-bg-blue',
              display: 'button',
              text: '',
              icon: 'fa fa-edit',
              onclick: () => {this.editUser(i, `${usr._id}`)}
            },
            {
              id: 'name',
              type: 'delete',
              status: 'btn-bg-red',
              display: 'button',
              text: '',
              icon: 'fa fa-trash',
              onclick: () => {this.deleteUser(i, `${usr._id}`)}
            }
          ]
        })
      })
    ) : ([])
    return(
      <Row>
        <Col lg={12} sm={12} xs={12} md={12} xl={12} className="text-right pad15">
          <Link to ='/add' className="btn btn-primary"><i className="fa fa-plus"></i> Add User</Link>
        </Col>
        <Col lg={12} sm={12} xs={12} md={12} xl={12} >
          <DataTable fields={tableFields} data={tableData} actionsField={true} />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users
  }
}

const mapDispatchToProps = {
  ...UserActions
};

export default connect(mapStateToProps, mapDispatchToProps)(List)