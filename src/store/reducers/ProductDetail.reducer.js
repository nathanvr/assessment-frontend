import axios from "axios";

const POST_SUCCES = "POST_SUCCES";
const POST_LOADING = "POST_LOADING";
const POST_ERR = "POST_ERR";

// action creator
export const getProductDetail = (id) => {
  return function (dispatch) {
    dispatch({ type: POST_LOADING, payload: true });
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        dispatch({ type: POST_SUCCES, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: POST_ERR, payload: err });
      })
      .finally(() => {
        dispatch({ type: POST_LOADING, payload: false });
      });
  };
};

const initialState = {
  product: {},
  loading: false,
  error: null
};

const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case POST_SUCCES:
      return {
        ...state,
        product: action.payload
      };
    case POST_ERR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default productDetailReducer;
