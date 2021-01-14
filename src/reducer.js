import { BUG_ADDED, BUG_REMOVE, BUG_RESOLVED } from './actionTypes';
let lastId = 0;

export default function reducer(state = [], action) {
  // the job of an action is to return a new state based on the action.
  if (action.type === BUG_ADDED) {
    // we will return a new state.
    // we need to return a new state that is the copy of the old state with newly added data.
    return [
      ...state, 
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      }
    ]
  } else if (action.type === BUG_REMOVE) {
    // here we want to return a new state with all the bugs except the one that we want to remove.
    return state.filter(bug => bug.id !== action.payload.id)
  } else if (action.type === BUG_RESOLVED) {
    // we want to update an existing bug object
    return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true})
  }

  // if the action does not match any of the actions we defined we want to return the current state. this will prevent our application from crashing
  return state;
}