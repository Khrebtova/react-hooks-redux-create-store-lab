// Note: createStore and candyReducer must be exported for the tests to run

export function createStore(reducer) {
  let state;

  const dispatch = (action) => {
    state = reducer(state, action);
    render();
  }

  const getState = () => state;

  return { dispatch, getState };
}

export function candyReducer(state = [], action) {
  switch (action.type) {
    case "candies/add":
      return [...state, action.candy];
    default:
      return state;
  }
}

let store = createStore(candyReducer);

function render() {
  let container = document.getElementById("container");
  if (store.getState()) {
    container.textContent = store.getState().join(" ");
  } else {
    throw new Error("the store's state has not been defined yet");
  }
}

store.dispatch({ type: "@@INIT"});
// Use your createStore function and the functions provided here to create a store.
// Once the store is created, call an initial dispatch.
