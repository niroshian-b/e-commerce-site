import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../Sidebar";

import ShopItem from "./ShopItem";
import Pagination from "./Pagination";

const ShopPage = () => {
  //state for items
  const [itemsInfo, setItemsInfo] = useState(undefined);

  //states for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  let { category } = useParams();

  let { bodylocation } = useParams();

  let { companyId } = useParams();

  //function containing fetch to get all items
  const getAllItems = () => {
    fetch("/items/")
      .then((res) => res.json())
      .then((data) => {
        setItemsInfo(data.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  //function containing fetch to get items by category
  const getItemsByCategory = () => {
    fetch(`/items/categories/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setItemsInfo(data.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  //function containing fetch to get items by company
  const getItemsByCompany = () => {
    fetch(`/items/companies/${companyId}`)
      .then((res) => res.json())
      .then((data) => {
        setItemsInfo(data.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  //function containing fetch to get items by body location
  const getItemsByBodyLocation = () => {
    fetch(`/items/bodyLocations/${bodylocation}`)
      .then((res) => res.json())
      .then((data) => {
        setItemsInfo(data.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  //useEffect calling the functions to fetch items, depending on which link
  //the user followed from the sidebar. So if the user clicks "medical" under "categories" it would
  //redirect him to the path /shop/categories/medical. the window location.pathname would then look like
  //this "/shop/categories/medical".
  useEffect(() => {
    //console log to see the pathname
    console.log("PATH", window.location.pathname);

    //if the pathname includes categories we want to call the getItemsByCategory function
    if (window.location.pathname.includes("categories")) {
      getItemsByCategory();

      //if the pathname includes companies we want to call the getItemsByCompany function
    } else if (window.location.pathname.includes("companies")) {
      getItemsByCompany();

      //if the pathname includes bodylocation we want to call the getItemsByBodyLocation function
    } else if (window.location.pathname.includes("bodylocation")) {
      getItemsByBodyLocation();
    }
  }, [category, bodylocation]);

  //declare current posts and indexes (for pagination)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    itemsInfo && itemsInfo.slice(indexOfFirstPost, indexOfLastPost);

  // Change page function (passed as onClick function to Pagination)
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (itemsInfo) {
    return (
      <Wrapper>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <ItemGridWrapper>
          <ItemsWrapper>
            {currentPosts.map((item) => {
              return (
                <ShopItem
                  key={item._id}
                  name={item.name}
                  price={item.price}
                  bodyLocation={item.body_location}
                  category={item.category}
                  imageSrc={item.imageSrc}
                  numInStock={item.numInStock}
                ></ShopItem>
              );
            })}
          </ItemsWrapper>
        </ItemGridWrapper>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={itemsInfo.length}
          paginate={paginate}
        />

      </Wrapper>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default ShopPage;

const Wrapper = styled.div`
  background-color: #f0f2f5;
  padding-bottom: 200px;
  position: relative;
  display: grid;
  grid-template-areas: "sidebar main main main";
  grid-template-columns: 1fr 50px 6fr;
`;

const SidebarWrapper = styled.div`
  grid-area: sidebar;
`;

const ItemGridWrapper = styled.div`
  grid-area: main;
  padding: 16px 64px;
`;

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 24px;
`;
