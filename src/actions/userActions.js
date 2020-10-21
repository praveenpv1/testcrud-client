export function getUsers(apiBaseUrl, headers) {
  console.log(apiBaseUrl, headers)
  return dispatch => {
    fetch(`${apiBaseUrl}/users`,{
      method: 'GET',
      headers: headers
    })
    .then((response) => response.json())
    .then((result) => {
      
      console.log(result)
      if(result.status) {
        dispatch({
          type: 'GET_USERS',
          payload: result.data
        })
      } else {
        throw `${result.message}`
      }  
    })
    .catch((err) => {
      dispatch({
        type: 'REQUEST_ERROR',
        payload: err.toString()
      })
    })
  }
}

export function getUsersById(apiBaseUrl, headers, id) {
  console.log(apiBaseUrl, headers)
  return dispatch => {
    fetch(`${apiBaseUrl}/users/${id}`,{
      method: 'GET',
      headers: headers
    })
    .then((response) => response.json())
    .then((result) => {
      
      console.log(result)
      if(result.status) {
        dispatch({
          type: 'SET_USER_BYID',
          payload: result.data[0]
        })
      } else {
        throw `${result.message}`
      }
    })
    .catch((err) => {
      dispatch({
        type: 'REQUEST_ERROR',
        payload: err.toString()
      })
    })
  }
}

export function setUserById(user = false) {
  return dispatch => {
    if(user) {
      dispatch({
        type: 'SET_USER_BYID',
        payload: user
      })
    }
  }
}

export function updateUser(apiBaseUrl, headers, data, id) {
  return dispatch => {
    fetch(`${apiBaseUrl}/users/${id}`,{
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((result) => {
      
      console.log(result)
      if(result.status) {
        dispatch({
          type: 'RESET_USER_BYID'
        })
      } else {
        throw `${result.message}`
      }
    })
    .catch((err) => {
      dispatch({
        type: 'REQUEST_ERROR',
        payload: err.toString()
      })
    })
  }
}

export function addUser(apiBaseUrl, headers, data) {
  return dispatch => {
    fetch(`${apiBaseUrl}/users`,{
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((result) => {
      
      console.log(result)
      if(result.status) {
        dispatch({
          type: 'RESET_USER_BYID'
        })
      } else {
        throw `${result.message}`
      }
    })
    .catch((err) => {
      dispatch({
        type: 'REQUEST_ERROR',
        payload: err.toString()
      })
    })
  }
}

export function deleteUser(apiBaseUrl, headers, id) {
  return dispatch => {
    fetch(`${apiBaseUrl}/users/${id}`,{
      method: 'DELETE',
      headers: headers
    })
    .then((response) => response.json())
    .then((result) => {
      
      console.log(result)
      if(result.status) {
        dispatch({
          type: 'RESET_USER_BYID'
        })
      } else {
        throw `${result.message}`
      }
    })
    .catch((err) => {
      dispatch({
        type: 'REQUEST_ERROR',
        payload: err.toString()
      })
    })
  }
}