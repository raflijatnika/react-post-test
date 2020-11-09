/* eslint-disable prefer-object-spread */
const initialState = {
  isLogIn: true,
}

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'loggedIn': {
      return Object.assign({}, state, { isLogIn: true })
    }
    case 'loggedOut': {
      return Object.assign({}, state, { isLogIn: false })
    }
    default:
      return state
  }
}

export default loginReducer
