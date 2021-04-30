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
        <ul>
          {pageNumbers.map((number) => (
            <Pageli key={number}>
              <PageLink onClick={() => paginate(number)} href="!#">
                {number}
              </PageLink>
            </Pageli>
          ))}
        </ul>
      </Wrapper>
    </>
  );
};

export default Pagination;

const Wrapper = styled.nav`
  display: block;
  text-align: center;
`;

const Pageli = styled.li`
  display: inline-block;
  text-align: center;
  background-color: #744fff;
  padding: 8px 0px;
  width: 55px;
  border-radius: 5px;
  margin: 60px;
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
