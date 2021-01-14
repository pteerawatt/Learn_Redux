import { BUG_ADDED, BUG_RESOLVED } from "./actionTypes";

export function bugAdded(description) {
  return {
    type: BUG_ADDED,
    payload: {
      description: description
    }
  };
}

export const bugResolved = id => ({
  type: BUG_RESOLVED,
  payload: {
    id: id
  }
})
