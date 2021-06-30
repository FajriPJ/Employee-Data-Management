const initialState = {
  employees: [],
  loading: false,
  error: null
}

function reducer(state = initialState, action){
  const {type, payload} = action
  switch (type) {
    case 'LOADING_EMPLOYEES':
      return {
        loading: true,
      } 
    case 'GET_EMPLOYEES':
      return {
        loading: false,
        employees: payload
      } 
    case 'ERROR_EMPLOYEES':
      return {
        loading: false,
      } 
    default:
      return state
  }
}

export default reducer