import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ShopItem from "./ShopPage/ShopItem";
import Loading from "./Loading";

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
        console.log(selectedId);
        setCompanyItems(data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
    if (selectedId) {
      history.push(`/shop/companies/${selectedId}`);
    }
  }, [selectedId]);

  const handleCompanySelect = (e) => {
    const selected = e.target.value;
    const selectedCompanyObj = companyInfo.filter((company) => {
      console.log(company);
      return company.name === selected;
    });
    if (selectedCompanyObj[0]) {
      console.log(" Selected company name: ", selectedCompanyObj[0].name);
      console.log(" Selected company id: ", selectedCompanyObj[0]._id);
      setSelectedId(selectedCompanyObj[0]._id);
    }
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
                return <option key={company.name}>{company.name}</option>;
              })}
            </Select>
          ) : (
            <>
              <Loading />
            </>
          )}
        </label>
      </Form>

      {/* Display Product Categories as Links */}
      <Filter>Product categories</Filter>
      <Categories>
        {categories.map((category) => {
          return (
            <CategoryLink
              activeStyle={{
                fontWeight: "bold",
              }}
              key={category}
              to={`/shop/categories/${category}`}
            >
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
            <CategoryLink
              activeStyle={{
                fontWeight: "bold",
              }}
              key={item}
              to={`/shop/bodylocation/${item}`}
            >
              {item}
            </CategoryLink>
          );
        })}
      </Categories>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10px 20px 0 20px;
  width: 200px;
  min-height: 100vh;
`;

const Select = styled.select`
  display: flex;
  margin-bottom: 10px;
  box-sizing: border-box;
  margin: 0;
  border-radius: 4px;
  min-height: 30px;
`;

const Form = styled.form`
  padding-bottom: 10px;
`;

const Filter = styled.p`
  font-weight: bold;
  padding-bottom: 10px;
  margin-top: 10px;
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

const CategoryLink = styled(NavLink)`
  text-decoration: none;
  line-height: 1.9;
  font-size: 1.125rem;
  margin-right: auto;
  &:hover {
    background: var(--tertiary-color);
    width: 150px;
    border-radius: 5px;
    padding-left: 8px;
    transition: 0.5s;
    font-weight: bold;
    color: var(--secondary-color);
  }
`;

export default Sidebar;
