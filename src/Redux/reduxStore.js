import { createStore, combineReducers } from "redux";

const valueReducer = (prevState = 0, action) => {
  switch (action.type) {
    case "increment":
      return prevState + 1;
    case "decrement":
      return prevState - 1;
    default:
      return prevState;
  }
};

const dataReducer = (prevState = {}, action) => {
    switch (action.type) {
      case "fetchData":
        return action.payload;
      default:
        return prevState; // Returning previous state by default
    }
  };

const appReducer = combineReducers({
  cartCount: valueReducer,
  storeData: dataReducer,
});

const increment = () => {
  return { type: "increment" };
};

const decrement = () => {
  return { type: "decrement" };
};

const storeData = (apiResponse) => {
  return { type: "fetchData",payload:apiResponse };
};

const store = createStore(appReducer);

export default store;

export { increment, decrement,storeData };
