// CONSTANTS
const ADD_TO_ORDER = 'ADD_TO_ORDER';
const UPDATE_ORDER = 'UPDATE_ORDER';

// STATE
const initialState = {
  totalAmount: 0,
  orders: [],
};

// ACTIONS
export function addtoOrder(order) {
  return { type: ADD_TO_ORDER, order };
}
export function updateOrder(order) {
  return { type: UPDATE_ORDER, order };
}

// REDUCERS
export function orderReducer(state = initialState, action) {
  let { orders, totalAmount } = state;
  switch (action.type) {
    case ADD_TO_ORDER:
      orders.push(action.order);
      totalAmount += action.order.amount;
      return { ...state, orders, totalAmount };

    case UPDATE_ORDER:
      console.log('UPDATE ORDER', action.order);
      totalAmount = 0;
      console.log([...orders], totalAmount);
      orders = orders.map((order) => {
        if (order.product.id === action.order.product.id) {
          order = action.order;
        }
        totalAmount += order.amount;
        return order;
      });
      console.log([...orders], totalAmount);

      return { ...state, orders, totalAmount };

    default:
      return state;
  }
}
