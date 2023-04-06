// ACTIONS TYPES
export const REQUEST_API = 'REQUEST_API';

// ACTIONS CREATORS
export const requestAPI = () => ({
    type: REQUEST_API,
  })

export const getData = (payload) => ({
    type: REQUEST_API,
    payload

  })