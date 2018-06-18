
// @flow
import type {State} from "./create-reducer";
import type { ExtractReturn } from './types'

const storeKey = 'counter';

const actions = {
  incrementCount: (addThisMuch: number) => ({
    type: 'INCREMENT_COUNT',
    payload: {
      addThisMuch,
    },
  }),
  decrementCount: (subtractThisMuch: number) => ({
    type: 'DECREMENT_COUNT',
    payload: {
      subtractThisMuch
    },
  }),
}

type Action =
  | ExtractReturn<typeof actions.incrementCount>
  | ExtractReturn<typeof actions.decrementCount>;

type CounterState = number;

const selectors = {
  value: (state: State) => state[storeKey],
}

function reducer(state: CounterState = 0, action: Action): CounterState {
  switch (action.type) {
    case 'INCREMENT_COUNT': {
      const {addThisMuch} = action.payload
      return state + addThisMuch
    }
    case 'DECREMENT_COUNT': {
      const {subtractThisMuch} = action.payload
      return state - subtractThisMuch
    }
    default:
      // eslint-disable-next-line
      (action: empty); // tell flow to make sure you've handled all cases
      return state;
  }
}

export default {
  storeKey,
  reducer,
  actions,
  selectors,
}
