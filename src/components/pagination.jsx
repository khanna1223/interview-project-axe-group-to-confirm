import React from 'react';
import styled from 'styled-components';
import { MdNavigateNext } from 'react-icons/md';
import { MdNavigateBefore } from 'react-icons/md';
import _ from 'lodash';
     //redux
import { connect } from 'react-redux';
    //actions
import { PREVIOUSPAGE, NEXTPAGE, CHANGEPAGENUMBER } from '../actions/actions'
    
    /*
    --These below props are coming from redux store mapStateToProps--
    productsList - Array of products,
    pageSize - Total products per page, selected from dropdown,
    PageNumber- current page
    */
    const Pagination = ({ productsList, pageSize, pageNumber, dispatch }) => {
      const pageCount = Math.ceil(productsList.length / pageSize);
      const totalPages = Math.ceil(productsList.length / pageSize);
      var start;
      var end;
      
      /*This if and else block is to show maximum 3 pageNumbers in the pagination 
      not below 1 and not over totalPages*/
      if (totalPages - pageNumber < 1) {
        if (totalPages < 3) {
          start = 1;
          end = pageNumber + 1;
        }
        else {
          start = totalPages - 2;
          end = pageNumber + 1;
        }
      }
      else if (totalPages - pageNumber < 2) {
        if (totalPages < 3) {
          start = 1;
          end = pageNumber + 2;
        }
        else {
          start = totalPages - 2;
          end = pageNumber + 2;
        }
      }
      else {
        start = pageNumber;
        end = pageNumber + 3;
      }

        const pages = _.range(start, end);  
        if (pageCount === 1) return null;
    
        return (
            <Wrapper>
              <ul className='pagination'>
                    <li className={pageNumber === 1 ? 'list-item isDisabled' : 'list-item'}
                      onClick={() => dispatch({ type: PREVIOUSPAGE, payload: { id: pageNumber } })}>
                      <a className="list-link" href="/#"><span className='prev-icon'><MdNavigateBefore/></span>Previous Page</a>
                    </li>
                    {pages.map(page =>
                    <li key={page}
                          onClick={() => dispatch({ type: CHANGEPAGENUMBER, payload:{id:page}})}
                          className={pageNumber === page ? "list-item active" : "list-item"}>
                      <a className='list-link' href="/#">{page}</a>
                    </li>)}
              <li className={pageNumber===totalPages?'list-item isDisabled':'list-item'} onClick={() => dispatch({ type: NEXTPAGE, payload: { id: totalPages } })}>
                      <a className="list-link" href="/#">Next Page <span className='next-icon'><MdNavigateNext/></span></a>
                    </li>
              </ul>
            </Wrapper>
        )
    }
    
    
const mapStateToProps = state => {
 const {productsList, pageSize, pageNumber} = state
      return {productsList, pageSize, pageNumber}
    }
    export default connect(mapStateToProps)(Pagination);
    
    
    const Wrapper = styled.div`
    .pagination {
      display: flex;
      justify-content:flex-end;
      padding: 10px 20px;
    }
    
    .list-item {
      min-width: 3rem;
      height: 1.8rem;
      text-align: center;
      margin:10px;
    }
    
    .list-link {
      display: block;
      color: #383838;
      font-weight: 600;
      text-decoration:none;
    }
    
    .list-item:hover {
      transform:scale(1.2);
      transition:var(--transition1);
    }
    
    .list-item.active {
      background-color:white;
      border-bottom:2px solid black;
      transform:scale(1);
      transition:var(--transition1);
    }
    .list-item.active .list-link {
      cursor:default;
    }
    .list-item.isDisabled {
        cursor: not-allowed;
        opacity: 0.2;
        text-decoration: none;
        border-bottom:none;
        transform:scale(1);
     }
     .isDisabled .list-link{
      cursor: not-allowed;
     }
     .next-icon svg{ //react icon component <MdNavigateNext/> is svg element
       transform:translateY(4px);
     }
     .prev-icon svg{
      transform:translateY(3px);
    }
    @media (max-width: 600px) {
      .pagination {
        display: flex;
        justify-content:center;
        padding: 0;
        margin:15px auto;
      }
      .list-item {
        min-width: 1rem;
        height: 1rem;
        text-align: center;
        margin:5px;
      }
      }
      `