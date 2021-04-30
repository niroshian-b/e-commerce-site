import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import ShopItem from "./ShopItem";

const ShopPage = () => {
  //state for items
  const [itemsInfo, setItemsInfo] = useState(undefined);

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
  }, []);

  if (itemsInfo) {
    return (
      <Wrapper>
        <div>SHOP PAGE</div>
        <ItemsWrapper>
          {itemsInfo.map((item) => {
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
`;

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 24px;
`;
