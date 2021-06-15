export const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    return handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action) : state
  };
}
