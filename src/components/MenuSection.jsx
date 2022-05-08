import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import data from '../data';

const MenuSectionContainer = styled.div`
  position: relative;
  height: 1157px;
  background: ${(props) => `url(${props.bgImg}) 50% 0 no-repeat`};

  .title {
    padding-top: 78px;
  }
`;

const MenuList = styled.div`
  position: relative;
  height: 1066px;
  background: ${(props) => `url(${props.menuImg}) 50% 0 no-repeat`};
  margin-top: 50px;

  > div {
    position: absolute;
  }

  .icecream {
    top: 50px;
    left: 319px;

    a {
      width: 395px;
      height: 302px;
    }
  }

  .icecreamcake {
    top: 50px;
    left: 752px;

    a {
      width: 276px;
      height: 472px;
    }
  }

  .beverage {
    top: 390px;
    left: 117px;

    a {
      width: 230px;
      height: 366px;
    }
  }

  .coffee {
    top: 390px;
    left: 385px;

    a {
      width: 329px;
      height: 292px;
    }
  }

  .dessert {
    top: 721px;
    left: 385px;

    a {
      width: 329px;
      height: 177px;
    }
  }

  .gift {
    top: 560px;
    left: 752px;

    a {
      width: 276px;
      height: 183px;
    }
  }
`;

const MenuSection = () => {
  const {
    menu: { bgImg, title, menuImg },
  } = data;

  const clsName = [
    'icecream',
    'icecreamcake',
    'beverage',
    'coffee',
    'dessert',
    'gift',
  ];

  return (
    <MenuSectionContainer bgImg={bgImg}>
      <div className="container">
        {/* title */}
        <h3 className="title">
          <img src={title} alt="title" />
        </h3>

        {/* menu list */}
        <MenuList className="menuList" menuImg={menuImg}>
          {clsName.map((v, i) => (
            <div className={v} key={i}>
              <Link to="/"></Link>
            </div>
          ))}
        </MenuList>
      </div>
    </MenuSectionContainer>
  );
};

export default MenuSection;
