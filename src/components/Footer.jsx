import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from '../data';

const FooterContainer = styled.footer`
  position: relative;
  min-width: 1200px;
  padding-bottom: 60px;
  border-top: 1px solid #feaf2b;
`;

const Policy = styled.div`
  padding: 0 80px;
  height: 77px;
  line-height: 77px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const PolicyItem = styled.li`
  width: ${(props) => props.width || '12%'};
  text-align: center;

  a {
    color: ${(props) => props.color || '#726454'};
    font-size: 14px;
  }
`;

const Brand = styled.div`
  background-color: #f9f8f7;

  .container {
    position: relative;
    height: 75px;

    .brandList {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 22px 0 0 222px;
    }
  }
`;

const BrandItem = styled.li`
  width: ${(props) => props.itemWidth};
  padding-right: ${(props) => props.paddingRight};
`;

const BrandItemImg = styled.img.attrs((props) => ({ src: props.src }))`
  width: ${(props) => props.width};
`;

const FamilySite = styled.nav`
  position: absolute;
  top: 21px;
  right: 196px;
  width: 150px;
  background-color: #fff;

  button {
    width: 100%;
    height: 32px;
    padding-left: 11px;
    border-radius: 5px;
    border: 1px solid #d1cecc;
    background: transparent
      url(https://www.baskinrobbins.co.kr/assets/images/common/family_size_off.pngg)
      no-repeat 100% 0;
    color: #b1ab9f;
    font-size: 11px;
    text-align: left;
    box-shadow: 2px 2px 2px 0px rgba(234, 233, 232, 0.8);
  }

  ul {
    display: none;
    position: absolute;
    left: 0;
    bottom: 28px;
    width: 100%;
    padding: 5px 0;
    border-radius: 5px 5px 0 0;
    border: 1px solid #d1cecc;
    background: #fff;
    box-sizing: border-box;

    &.show {
      display: block;
    }

    a {
      display: block;
      height: 25px;
      padding-left: 15px;
      color: #726454;
      line-height: 25px;

      &:hover {
        background: #efefef;
      }
    }
  }
`;

const Info = styled.div`
  padding-top: 48px;
  color: #635b56;
  font-size: 11px;
  text-align: center;

  .logo {
    color: #635b56;
    font-size: 11px;
    text-align: center;
    padding-bottom: 35px;
  }

  > div p {
    display: inline-block;
    padding-right: 15px;
    padding-bottom: 3px;
  }

  .address {
    display: inline-block;
    padding-bottom: 3px;
    font-style: normal;
  }

  .copyright {
    padding-top: 12px;
    color: #b1adab;
    font-size: 11px;
  }
`;

const Footer = () => {
  const {
    footer: { brand, info },
  } = data;

  const [show, setShow] = useState(false);

  return (
    <FooterContainer>
      <Policy className="container">
        <ul>
          <PolicyItem>
            <Link to="/">점포개설문의</Link>
          </PolicyItem>
          <PolicyItem>
            <Link to="/">채용문의</Link>
          </PolicyItem>
          <PolicyItem>
            <Link to="/">윤리신고센터</Link>
          </PolicyItem>
          <PolicyItem>
            <Link to="/">이용약관</Link>
          </PolicyItem>
          <PolicyItem width="15%" color="#ff7c98">
            <Link to="/">개인정보처리방침</Link>
          </PolicyItem>
          <PolicyItem width="20%">
            <Link to="/">영상정보처리기기운영관리방침</Link>
          </PolicyItem>
          <PolicyItem width="17%">
            <Link to="/">거래희망회사</Link>
          </PolicyItem>
        </ul>
      </Policy>

      <Brand>
        <div className="container">
          <ul className="brandList">
            <BrandItem itemWidth="111px">
              <Link to="/">
                <BrandItemImg src={brand[0]} alt="brand" />
              </Link>
            </BrandItem>
            <BrandItem itemWidth="118px">
              <Link to="/">
                <BrandItemImg src={brand[1]} alt="brand" />
              </Link>
            </BrandItem>
            <BrandItem itemWidth="182px">
              <Link to="/">
                <BrandItemImg src={brand[2]} alt="brand" />
              </Link>
            </BrandItem>
            <BrandItem paddingRight="9px">
              <Link to="/">
                <BrandItemImg src={brand[3]} alt="brand" />
              </Link>
            </BrandItem>
            <BrandItem paddingRight="9px">
              <Link to="/">
                <BrandItemImg src={brand[4]} alt="brand" width="31px" />
              </Link>
            </BrandItem>
            <BrandItem>
              <Link to="/">
                <BrandItemImg src={brand[5]} alt="brand" />
              </Link>
            </BrandItem>
          </ul>

          <FamilySite>
            <button onClick={() => setShow((prev) => !prev)}>
              FAMILY SITE
            </button>
            <ul className={show ? 'show' : ''}>
              <li>
                <Link to="/">배스킨 스쿨</Link>
              </li>
              <li>
                <Link to="/">SPC그룹사이트</Link>
              </li>
              <li>
                <Link to="/">SPC MAGAZINE</Link>
              </li>
              <li>
                <Link to="/">BR코리아</Link>
              </li>
              <li>
                <Link to="/">해피포인트카드</Link>
              </li>
              <li>
                <Link to="/">파스쿠찌</Link>
              </li>
              <li>
                <Link to="/">삼립</Link>
              </li>
              <li>
                <Link to="/">파리바게트</Link>
              </li>
              <li>
                <Link to="/">던킨도너츠</Link>
              </li>
            </ul>
          </FamilySite>
        </div>
      </Brand>

      <Info className="container">
        <div className="logo">
          <img src={info} alt="logo" />
        </div>

        <div className="box1">
          <p>사업자 등록번호 : 303-81-09535</p>
          <p>비알코리아(주) 대표이사 도세호</p>
          <address className="address">
            서울특별시 서초구 남부순환로 2620(양재동 11-149번지)
          </address>
        </div>

        <div className="box2">
          <p>TEL : 080-555-3131</p>
          <p>개인정보관리책임자 : 김경우</p>
        </div>

        <p className="copyright">
          Copyright ⓒ 2016 BRKOREA Company. All Rights Reserved.
        </p>
      </Info>
    </FooterContainer>
  );
};

export default Footer;
