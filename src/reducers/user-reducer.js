/**
 *
 *  reducer - to update store state
 *  listens to every action that is sent
 */

export default function userReducer(state = "", { type, payload }) {
  switch (type) {
    case "updateUser":
      return payload.user;
    default:
      return state;
  }
}
