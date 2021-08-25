import React from 'react';
import styled from 'styled-components';
//components
import Product from "../components/product";
import Header from '../components/header';
import Pagination from '../components/pagination';
import Paginate from '../utils/paginate';
//redux
import { connect } from 'react-redux';

/*
--These below props are coming from redux store mapStateToProps--
productsList - Array of products stored on endpoint,
pageSize - Total number of products on a page selected from header component dropdown,
PageNumber- current page
*/
const Home = ({ productsList, pageSize, pageNumber }) => {
  const items = Paginate(productsList, pageNumber, pageSize) //Paginate function from Paginate Component

    return (
        <Wrapper>
          <div className='main-container'>
            
            <div className='header-container'>
              <Header/>
            </div>
          
            <div className='products-container'>
                {items.map((product) => {
                return <Product key={product.id} {...product} />
                })}
            </div>
            <Pagination/>
         </div>
       </Wrapper>
    )
}

const mapStateToProps = state => {
  const{productsList, pageSize, pageNumber} = state
  return { productsList, pageSize, pageNumber }
}
export default connect(mapStateToProps)(Home);


const Wrapper = styled.section`
  .main-container{
    margin:1rem;
    min-height:90vh;
  }
  .header-container{
      margin-bottom:0;
  }
  .products-container {
    display: grid;
    gap: 1rem 1rem;
  }
  @media (max-width: 599px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 600px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 1199px) {
    .products-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
