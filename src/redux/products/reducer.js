import { ADD_PRODUCT, REMOVE_PRODUCT } from "./types";

//초기 상태값 설정
const initState = {
  count: 50,
};
//리듀서 작성
const productReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        state,
        count: state.count + 1,
      };
    case REMOVE_PRODUCT:
      return {
        state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default productReducer;
