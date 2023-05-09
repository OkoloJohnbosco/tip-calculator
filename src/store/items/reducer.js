import { ITEM_ADDED, ITEM_PRICE_UPDATE, ITEM_QUANTITY_UPDATE, REMOVE_ITEM } from "./actions";

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    return [...state, { ...action.payload, uuid: id++, quantity: 1 }]
  }
  if (action.type === REMOVE_ITEM) {
    return state.filter(item => item.uuid !== action.payload)
  }
  if (action.type === ITEM_PRICE_UPDATE) {

    return state.map(item => {
      if (item.uuid === action.payload.uuid) {
        return {
          ...item,
          price: action.payload.price
        }
      }
      return item
    })
  }
  if (action.type === ITEM_QUANTITY_UPDATE) {

    return state.map(item => {
      if (item.uuid === action.payload.uuid) {
        return {
          ...item,
          quantity: action.payload.quantity
        }
      }
      return item
    })
  }
  return state;
};

export default reducer;
