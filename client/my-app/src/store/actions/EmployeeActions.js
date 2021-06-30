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
    dispatch({type: 'LOADING_EMPLOYEES'})
    const res = await axios.get('https://randomuser.me/api/?results=28')
    console.log(res.data.results.length, ',,,,,,,,,,,,,,,,,,,', typeof res.data.results)
    dispatch(GetEmployees(res.data.results))
  } catch (error) {
    console.log(error)
    dispatch({type: 'ERROR_EMPLOYEES'})
  }
}