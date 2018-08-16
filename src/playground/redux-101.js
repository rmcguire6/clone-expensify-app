import { createStore } from 'redux';
console.log('Hi from redux-101.js');

//Action generators--functions that return action objects 

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})
const resetCount = () => ({
  type: 'RESET'
})
const setCount = ({ count }) => ({
  type: 'SET',
  count
})

// Reducers
// 1. Reducers are pure functions(output based only on input state and action no globals!! )
// 2. Never change state or action--return new state in new object

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':

      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};
const store = createStore(countReducer);
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: -654 }));

