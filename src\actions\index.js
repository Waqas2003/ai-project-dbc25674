import axios from 'axios';

export function fetchProducts() {
  return (dispatch) => {
    axios.get('/api/products').then((response) => {
      dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', products: response.data });
    });
  };
}