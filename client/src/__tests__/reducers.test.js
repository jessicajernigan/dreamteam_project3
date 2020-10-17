// run <$ npm run test> from client directory to execute <"react-scripts test"> from package.json and run all tests in the src folder

// import our actions
import {
  TYPE_ONE, TYPE_TWO
} from '../utils/types';

import { reducer } from '../utils/reducers';

// create a sample of what our global state will look like
const initialState = {

}

test('TYPE_ONE', () => {
  let newState = reducer(initialState, {
    type: TYPE_ONE,
    first: [{}, {}]
  })

  expect(newState).toBe(true);
  expect(initialState).toBe(true);

})

test('TYPE_TWO', () => {
  let newState = reducer(initialState, {
    type: TYPE_TWO,
    first: [{}, {}]
  })

  expect(newState).toBe(true);
  expect(initialState).toBe(true);

})

