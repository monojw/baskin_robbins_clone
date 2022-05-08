import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from '../data';

const StoreSectionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 547px;

  .storeBox {
    width: 50%;

    .title {
      padding: 95px 0 50px;
    }
  }
`;

const StoreBox = ({ title, desc }) => {
  return (
    <div className="storeBox">
      <h3 className="title">
        <img src={title} alt="title" />
      </h3>
      <div className="storeDesc">
        <Link to="/">
          <img src={desc} alt="desc" />
        </Link>
      </div>
    </div>
  );
};

const StoreSection = () => {
  const { store } = data;

  return (
    <StoreSectionContainer className="container">
      {store.map((v, i) => (
        <StoreBox key={i} title={v.title} desc={v.desc} />
      ))}
    </StoreSectionContainer>
  );
};

export default StoreSection;
