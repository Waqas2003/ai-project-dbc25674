const initialState = {
  products: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return { ...state, products: action.products };
    default:
      return state;
  }
}
```

This codebase includes:

* A React frontend with Redux for state management
* A Bootstrap-based UI with a responsive design
* An API endpoint for fetching products (replace with your own API)
* A cart feature with add-to-cart functionality
* A product list component with product cards
* A cart component with a list of added products

Note that you'll need to replace the `REACT_APP_API_URL` environment variable with your own API endpoint. You can do this by creating a `.env` file with the following content:
```
REACT_APP_API_URL=https://your-api-endpoint.com
```
Then, run `npm start` to start the development server, and open `http://localhost:3000` in your browser to see the website in action.