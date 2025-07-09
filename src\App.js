import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from './actions';
import ProductList from './ProductList';
import Cart from './Cart';

function App({ products, fetchProducts }) {
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => ({ ...prevCart, [product.id]: product }));
  };

  return (
    <div className="container">
      <h1>Ecommerce Website</h1>
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <Cart cart={cart} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);