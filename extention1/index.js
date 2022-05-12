let store = Redux.createStore(reducer);

let counter = store.getState();

const h1 = document.querySelector("h1");
h1.innerHTML = counter;

const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");

const five = document.querySelector(".five");
const ten = document.querySelector(".ten");
const fifteen = document.querySelector(".fifteen");

let steps = 1;

five.addEventListener("click", () => {
  steps = 5;
});
ten.addEventListener("click", () => {
  steps = 10;
});
fifteen.addEventListener("click", () => {
  steps = 15;
});

increment.addEventListener("click", () => {
  store.dispatch({ type: "increment", step: steps });
});
decrement.addEventListener("click", () => {
  store.dispatch({ type: "decrement", step: steps });
});
reset.addEventListener("click", () => {
  store.dispatch({ type: "reset" });
});

store.subscribe(() => {
  counter = store.getState();
  h1.innerHTML = counter;
});

function reducer(state = 0, action) {
  switch (action.type) {
    case "increment":
      return state + action.step;
      break;
    case "decrement":
      return state - action.step;
      break;
    case "reset":
      return 0;
      break;
    default:
      return state;
      break;
  }
}
