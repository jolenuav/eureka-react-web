// CONSTANTS
const ADD_TO_ORDER = 'ADD_TO_ORDER';
const MINUS_TOTAL_AMOUNT = 'MINUS_TOTAL_AMOUNT';
const SUM_TOTAL_AMOUNT = 'SUM_TOTAL_AMOUNT';

// STATE
const initialState = {
  totalAmount: 0,
  order: [],
};

// ACTIONS
export function addtoOrder(order) {
  return { type: ADD_TO_ORDER, order };
}

export function minusTotalAmoun(amount) {
  return { type: MINUS_TOTAL_AMOUNT, amount };
}

export function sumTotalAmoun(amount) {
  return { type: MINUS_TOTAL_AMOUNT, amount };
}

// REDUCERS
export function orderReducer(state = initialState, action) {
  let { order, amount } = state;
  switch (action.type) {
    case ADD_TO_ORDER:
      order.push(action.push);
      return { ...state, order };

    case MINUS_TOTAL_AMOUNT:
      amount -= action.amount;
      return { ...state, totalAmount: amount };

    case SUM_TOTAL_AMOUNT:
      amount += action.amount;
      return { ...state, totalAmount: amount };

    default:
      return state;
  }
}
