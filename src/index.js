import store from './store';
import { BUG_ADDED, BUG_REMOVE } from './actionTypes';
import { bugAdded, bugResolved } from './actions';

// if we console.log(store) we get an object with many methods.


// store subscribe.
// this function below specifically returns the function from unsubscribing from the store so we name it unsubscribe.
const unsubscribe = store.subscribe(() => {
  // this function gets ran every time the state changes in the store.
  // in an application this is where you want re-rendering to occur.
  console.log("Store changed!", store.getState());
})



// if we console.log(store.getState()) before doing any dispatch() we get the empty state []

// we would call the dispatch (below) when user clicks the add button.
store.dispatch({
  type: BUG_ADDED,
  payload: {
    description: "Bug1"
  }
})
// if we console.log(store.getState()) now we will see the bug in our state.


// if we call unsubscribe here the store subscribtion ends and we will not get notified when we remove bug.
unsubscribe();

store.dispatch({
  type: BUG_REMOVE,
  payload: {
    id: 1
  }
})
console.log(store);


// TO CLEAN UP CODE USING action.js to store action object
store.dispatch(bugAdded("Bug1"))

store.dispatch(bugResolved(1));