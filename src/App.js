import React from "react";
import reducer from './reducer/reducer';
//components
import ProductsContainer from "./pages/home";
//API EndPoint
import productsData from "./api/productsData";
//redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const initialStore = {
  productsList: productsData,
  pageSize: 8,
  pageNumber: 1
}

const store = createStore(reducer, initialStore);

function App() {
  return (
    <Provider store={store}>
      <ProductsContainer/>
    </Provider>
  );
}

export default App;