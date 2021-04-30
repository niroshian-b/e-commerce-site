import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
    pageNumbers.push(index);
  }
  return (
    <>
      <Wrapper>
        <PageUl>
          {pageNumbers.map((number, index) => (
            <PageLi key={number}>
              <PageLink onClick={() => paginate(number)} href="!#">
                {number}
              </PageLink>
            </PageLi>
          ))}
        </PageUl>
      </Wrapper>
    </>
  );
};

export default Pagination;

const Wrapper = styled.nav``;

const PageUl = styled.ul`
  display: block;
`;

const PageLi = styled.li`
  text-align: center;
  background-color: #744fff;
  padding: 8px 0px;
  width: 55px;
  border-radius: 5px;
  margin: 60px;
  list-style: none;
`;

const PageLink = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  color: white;

  &::hover,
  :active,
  :visited {
    text-decoration: none;
    color: white;
  }
`;
