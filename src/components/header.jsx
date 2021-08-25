import React from 'react';
import styled from 'styled-components';
//local icon
import downArrowImage from '../icons/downArrow.svg';
//redux
import { connect } from 'react-redux';
//actions
import { UPDATEPAGESIZE } from '../actions/actions';
    
/*
--These below props are coming from redux store mapStateToProps--
pageSize - Total number of products on a page selected from header component dropdown
productsList - Array of products stored on endpoint
*/
const Header = ({ pageSize, productsList, dispatch }) => {
    return (
        <Wrapper>
            <div className='header-display'>
                 <div>
                    <h6 className='m-0 header-title'>All Products</h6>
                    <p className='m-0 header-sub'>{productsList.length} Products</p>
                 </div>
                <form className='header-dropdown'>
                    <label htmlFor='pageSize'></label>
                    <select name='pageSize' id='pageSize'
                        onChange={(e) => dispatch({ type: UPDATEPAGESIZE, payload: { id: e.target.value } })}>
                    <option value='8'>8 per page</option>
                    <option value='20'>20 per page</option>
                    <option value='52'>50 per page</option> {/* Adjusted value to fill empty space on browser */}
                    <option value='100'>100 per page</option>
                    <option value='252'>250 per page</option>
                    <option value='500'>500 per page</option>
                    <option value='1000'>1000 per page</option>
                    </select>
                </form>
            </div>
            <hr className='mt-0 mb-2'/>
        </Wrapper>
    )
}

const mapStateToProps = state => {
    const {productsList, pageSize} = state
    return {productsList, pageSize}
  }
  export default connect(mapStateToProps)(Header);



const Wrapper = styled.header`
.header-display{
    display:flex;
    justify-content:space-between;
}
.header-title{
    font-weight: 600;
}
.header-sub{
    font-weight: 300;
}
.header-dropdown{
    align-self:flex-end;
    margin-bottom:5px;
}
select#pageSize { //removed default border
    border:0px;
    outline:0px;
 }
 select#pageSize { //added custom border and icon
    min-width: 125px;
    font-size: 1rem;
    line-height: 1;
    border: 0;
    border-radius: 5px;
    height: 2rem;
    background: url(${downArrowImage}) no-repeat right;
    -webkit-appearance: none;
    border:1px solid var(--clr-grey-11);
    padding-left: 5px;
}
`