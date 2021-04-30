import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  // const pagination = (currentPage, nrOfPages) => {
  //   var delta = 2,
  //     range = [],
  //     rangeWithDots = [],
  //     l;

  //   range.push(1);

  //   if (nrOfPages <= 1) {
  //     return range;
  //   }

  //   for (let i = currentPage - delta; i <= currentPage + delta; i++) {
  //     if (i < nrOfPages && i > 1) {
  //       range.push(i);
  //     }
  //   }
  //   range.push(nrOfPages);

  //   for (let i of range) {
  //     if (l) {
  //       if (i - l === 2) {
  //         rangeWithDots.push(l + 1);
  //       } else if (i - l !== 1) {
  //         rangeWithDots.push("...");
  //       }
  //     }
  //     rangeWithDots.push(i);
  //     l = i;
  //   }

  //   return rangeWithDots;
  // };

  const pageNumbers = [];
  const pages = Math.ceil(totalPosts / postsPerPage);

  for (let index = 1; index <= pages; index++) {
    //console.log(`Selected page ${index}:`, pagination(index, pages));
    pageNumbers.push(index);
  }
  return (
    <>
      <Wrapper>
        <PageUl>
          {pageNumbers.map((number, index) => (
            <PageLi key={number}>
              <PageLink
                onClick={() => {
                  paginate(number);
                }}
                href="!#"
              >
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
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const PageLi = styled.li`
  text-align: center;
  background-color: #744fff;
  padding: 8px 0px;
  width: 45px;
  border-radius: 5px;
  margin: 10px;
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
