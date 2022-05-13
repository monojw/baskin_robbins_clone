import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import data from '../data';
import SearchBar from './SearchBar';

const HeaderContainer = styled.header`
  position: relative;
  min-width: 1200px;
  border-top: 3px solid #ff7c98;
  border-bottom: 2px solid #3f291a;
  background: url(http://www.baskinrobbins.co.kr/assets/images/common/bg_header.gif)
    50% 0 repeat-x;
`;

/* Header Top */
const HeaderTop = styled.div`
  height: 135px;
  padding-top: 21px;
  border-bottom: 1px solid #e2d9d6;

  .container {
    position: relative;
  }
`;

const HeaderLogo = styled.div`
  width: 92px;
  height: 92px;
  margin: 0 auto;

  a {
    display: block;
    width: 100%;
    height: 100%;
    background: url(http://www.baskinrobbins.co.kr/assets/images/common/logo_baskinrobbins.png)
      no-repeat;
  }
`;

const HeaderLeft = styled.div`
  position: absolute;
  top: 50px;
  left: 0;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      padding-right: 10px;
    }
  }
`;

const SnsImg = styled.img.attrs((props) => ({ src: props.img }))``;

const HeaderRight = styled.div`
  position: absolute;
  top: 39px;
  right: 0;
  height: 54px;
  line-height: 54px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      padding-left: 20px;
      font-size: 11px;

      &.search {
        padding-left: 26px;

        a {
          display: inline-block;
          width: 54px;
          height: 54px;
          background: url(http://www.baskinrobbins.co.kr/assets/images/common/icon_search.png)
            no-repeat;
          text-indent: -9999em;
        }
      }

      &.searchClick {
        a {
          background: url(https://www.baskinrobbins.co.kr/assets/images/common/btn_search_close.gif)
            no-repeat;
        }
      }
    }
  }
`;

/* Header Bottom */
const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Memeber = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    height: 46px;
    background-position: 0px -1px;
    background: url(http://www.baskinrobbins.co.kr/assets/images/common/gnb_menu.png)
      no-repeat;
    text-indent: -9999em;
  }

  .login a {
    padding-right: 23px;

    span {
      width: 35px;
      background-position: 0 0;
    }
  }

  .join a {
    padding: 0 23px;
    span {
      width: 27px;
      background-position: -97px -1px;
    }
  }
`;

const GNB = styled.nav`
  .depth1 {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    li {
      position: relative;

      &:first-child li {
        padding-top: 0;
      }

      &:first-child a {
        padding-left: 0;
      }

      &:last-child a {
        padding-right: 0;
      }

      &:last-child .depth2 {
        align-items: flex-end;
      }
    }
  }

  .gnbBg {
    overflow: hidden;
    position: absolute;
    top: 182px;
    left: 0;
    height: 0;
    z-index: 999;
    min-width: 100%;
    border-bottom: 1px solid #693337;
    background: #fff;
    transition: height 0.5s ease;

    div {
      width: 1200px;
      height: 204px;
      margin: 0 auto;
      background: url(https://www.baskinrobbins.co.kr/assets/images/common/img_happypoint_app.jpg)
        no-repeat 0 65px;
    }
  }

  &:hover .gnbBg,
  &:hover .depth2 {
    height: 275px;
  }

  .depth2 img {
    opacity: 0;
    transition: opacity 0.3s linear;
  }

  &:hover .depth2 img {
    opacity: 1;
  }
`;

const GNBMain = styled.div`
  a {
    padding: ${(props) => props.padding || '0 59px'};

    span {
      display: block;
      width: ${(props) => props.width};
      height: 46px;
      background: url(https://www.baskinrobbins.co.kr/assets/images/common/gnb_menu.png)
        no-repeat;
      background-position: ${(props) => `${props.backgroundPosition} -3px`};
      text-indent: -9999em;
      line-height: 46px;
    }
  }
`;

const GNBSub = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 100%;
  left: 0;
  overflow: hidden;
  height: 0;
  width: 100%;
  z-index: 1000;

  li {
    padding-bottom: 12px;

    &:first-child {
      padding-top: 40px;
    }

    a {
      display: block;
      padding: 5px 0;
      color: #7b7b7b;
      line-height: 1.2;
      text-transform: uppercase;

      &:hover {
        color: #ff75ac;
      }
    }
  }
`;

const Header = () => {
  const [searchClick, setSearchClick] = useState(false);
  const {
    header: { img, gnb },
  } = data;

  const width = ['164px', '42px', '105px', '42px', '49px', '49px'];
  const backgroundPosition = [
    '-133px',
    '-415px',
    '-545px',
    '-737px',
    '-897px',
    '-1057px',
  ];

  return (
    <HeaderContainer>
      {/* Search bar */}
      <SearchBar searchClick={searchClick} />

      {/* Header Top */}
      <HeaderTop>
        <div className="container">
          {/* logo */}
          <HeaderLogo>
            <Link to="/"></Link>
          </HeaderLogo>

          {/* left */}
          <HeaderLeft>
            <ul>
              {img.map((v, i) => (
                <li key={i}>
                  <Link to="/">
                    <SnsImg img={v} />
                  </Link>
                </li>
              ))}
            </ul>
          </HeaderLeft>

          {/* right */}
          <HeaderRight>
            <ul>
              <li>
                <Link to="/">고객센터</Link>
              </li>
              <li>
                <Link to="/">CONTACT US</Link>
              </li>
              <li
                className={searchClick ? 'search searchClick' : 'search'}
                onClick={() => {
                  setSearchClick(!searchClick);
                }}
              >
                <Link to="/">search</Link>
              </li>
            </ul>
          </HeaderRight>
        </div>
      </HeaderTop>
      {/* Header Bottom */}
      <HeaderBottom className="container">
        {/* member */}
        <Memeber>
          <ul>
            <li className="login">
              <Link to="/">
                <span>LOGIN</span>
              </Link>
            </li>
            <li className="join">
              <Link to="/">
                <span>JOIN</span>
              </Link>
            </li>
          </ul>
        </Memeber>
        {/* gnb */}
        <GNB>
          <ul className="depth1">
            {gnb.map((v, i) => {
              const { main, sub } = v;

              return (
                /* depth1 */
                <li key={i}>
                  <GNBMain
                    padding={i === 2 && '0 27.5px'}
                    width={width[i]}
                    backgroundPosition={backgroundPosition[i]}
                  >
                    <Link to="/">
                      <span>{main}</span>
                    </Link>
                  </GNBMain>

                  <GNBSub className="depth2">
                    {sub.map((v2, i2) => (
                      /* depth2 */
                      <li key={i2}>
                        <Link to="/">
                          {i === 0 ? (
                            <img src={v2} alt="monthly flavor" />
                          ) : (
                            <span>{v2}</span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </GNBSub>
                </li>
              );
            })}
          </ul>

          {/* GNB Background */}
          <div className="gnbBg">
            <div></div>
          </div>
        </GNB>
      </HeaderBottom>
    </HeaderContainer>
  );
};

export default Header;
