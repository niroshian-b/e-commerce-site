import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ShopItem from "./ShopItem";

const ShopPage = () => {
  //state for items
  const [itemsInfo, setItemsInfo] = useState(undefined);

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

  const getItemsByCategory = () => {
    fetch("/items/categories/medical")
      .then((res) => res.json())
      .then((data) => {
        setItemsInfo(data.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  //useEffect calling the function to get all items
  useEffect(() => {
    getItemsByCategory();
  }, []);

  //console.log(itemsInfo);

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
`;

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 24px;
`;
