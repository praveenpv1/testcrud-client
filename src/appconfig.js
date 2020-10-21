const appConfig = {
  settings: {
    http: {
      api: 'http://localhost:5001',
      headers: {
        'Accept': 'application/json', 
        "Content-Type" : "application/json",
        'Access-Control-Allow-Origin':"*"
      }
    }
  },
  users: [],
  userById: {}
}
export default appConfig