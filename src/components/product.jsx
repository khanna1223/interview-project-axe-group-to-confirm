import React from 'react';
import styled from 'styled-components';

/*These below props are coming from home component*/

const Product = ({ product_image, product_name, description, price }) => {
    return (
     <Wrapper className="card">
        <div className='container'>
          <img src={product_image} alt={product_name}/>
        </div>
        <hr className='m-1'/>
        <footer>
                <h6 className='card-title'>{product_name}</h6>
                <p className='card-description'>{description }</p>
                <h6 className='card-price'>{price}</h6>
        </footer>
      </Wrapper>
    )
}


export default Product;


const Wrapper = styled.article`
  .card {
      padding:1rem;
  }
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 60%;
    height:120px;
    margin:5px auto 0;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  img:hover {
    cursor:pointer;
  }
  footer {
    display: flex;
    flex-direction:column;
    margin-left:1.5rem;
  }
  .card-title {
    margin-bottom:0;
  }
  .card-title:hover {
    cursor:pointer;
    transform:scale(1.1);
    transition:var(--transition3);
  }
  .card-price {
    font-weight: 700;
    margin-bottom:10px;
  }
  .card-description {
    margin-bottom:5px;
    font-weight: 300;
  }
  .card-description::first-letter {
    text-transform: uppercase;
  }
`