import axios from "axios"

export function GetEmployees(payload) {
  return {
    type: 'GET_EMPLOYEES',
    payload
  }
}

export function Loading() {
  return {
    type: 'LOADING_EMPLOYEES',
  }
}

export const GetDispatchEmployees = () => async (dispatch) => {
  try {
    dispatch(Loading())
    const res = await axios.get('https://randomuser.me/api/?results=28')
    dispatch(GetEmployees(res.data.results))
  } catch (error) {
    console.log(error)
    dispatch({type: 'ERROR_EMPLOYEES'})
  }
}