import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ShopItem from "./ShopPage/ShopItem";

const categories = [
  "Fitness",
  "Medical",
  "Lifestyle",
  "Entertainment",
  "Industrial",
  "Pets and Animals",
  "Gaming",
];

const bodyLocation = [
  "Head",
  "Neck",
  "Chest",
  "Arms",
  "Wrist",
  "Hands",
  "Feet",
  "Waist",
];

const Sidebar = () => {
  const [companyInfo, setCompanyInfo] = useState(undefined); //all companies info
  const [selectedId, setSelectedId] = useState(undefined);
  const [companyItems, setCompanyItems] = useState(undefined); //selected company items
  const history = useHistory();

  useEffect(() => {
    fetch("/companies")
      .then((res) => res.json())
      .then((data) => {
        setCompanyInfo(data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  useEffect(() => {
    fetch(`/items/companies/${selectedId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("fetched data", data);
        setCompanyItems(data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [selectedId]);

  const handleCompanySelect = (e) => {
    const selected = e.target.value;
    const selectedCompanyObj = companyInfo.filter((company) => {
      console.log(company.name);
      return company.name === selected;
    });

    setSelectedId(selectedCompanyObj[0]._id);

    console.log(" Selected company name: ", selectedCompanyObj[0].name);
    console.log(" Selected company id: ", selectedCompanyObj[0]._id);
    history.push(`/items/companies/${selectedCompanyObj[0]._id}`);
  };

  return (
    <Wrapper>
      {/* Select tag that allows users to select Items by company */}
      <Form>
        <label>
          <Filter>Filter by Company</Filter>
          {companyInfo ? (
            <Select onChange={(e) => handleCompanySelect(e)}>
              <option key={0}>Select a Company</option>
              {companyInfo.map((company) => {
                return <option>{company.name}</option>;
              })}
            </Select>
          ) : (
            <></>
          )}
        </label>
      </Form>

      {/* Display Product Categories as Links */}
      <Filter>Product categories</Filter>
      <Categories>
        {categories.map((category) => {
          return (
            <CategoryLink key={category} to={`/shop/categories/${category}`}>
              {category}
            </CategoryLink>
          );
        })}
      </Categories>

      {/* Display Body Locations as Links */}
      <Filter>Body Locations</Filter>
      <Categories>
        {bodyLocation.map((item) => {
          return (
            <CategoryLink key={item} to={`/shop/bodylocation/${item}`}>
              {item}
            </CategoryLink>
          );
        })}
      </Categories>

      {/* Items provided by selected Company */}
      <div>
        {companyItems ? (
          <div>
            {companyItems.map((item) => {
              return (
                <>
                  <ShopItem
                    key={item._id}
                    name={item.name}
                    price={item.price}
                    bodyLocation={item.body_location}
                    category={item.category}
                    imageSrc={item.imageSrc}
                    numInStock={item.numInStock}
                  ></ShopItem>
                </>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10px 20px 0 20px;
  width: 200px;
  height: 100vh;
`;

const Select = styled.select`
  display: flex;
  margin-bottom: 10px;
  box-sizing: border-box;
  margin: 0;
  border-radius: 4px;
`;

const Form = styled.form`
  padding-bottom: 10px;
`;

const Filter = styled.p`
  font-weight: bold;
  padding-bottom: 10px;
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

const CategoryLink = styled(NavLink)`
  text-decoration: none;
  line-height: 1.6;
  margin-right: auto;
`;

export default Sidebar;