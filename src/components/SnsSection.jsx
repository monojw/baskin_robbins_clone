import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from '../data';

const SnsSectionContainer = styled.div`
  .title {
    padding-bottom: 26px;
  }

  .sns {
    width: 400px;
    margin: 0 auto;
    padding-bottom: 35px;

    ul {
      display: flex;

      li {
        padding: 0 9px;
      }
    }
  }

  h4.title {
    position: relative;
    text-align: center;
    padding: 26px 0 26px;
    margin-bottom: -14px;

    a {
      position: absolute;
      display: inline-block;
      width: 298px;
      height: 13px;
      margin-left: -149px;
      text-align: center;
    }
  }

  .insta {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 50px 0 190px;
    row-gap: 1.5px;

    .thumb {
      width: 20%;
      height: 238px;
      padding: 1.5px;
      overflow: hidden;
    }
  }
`;

const ThumbImg = styled.img.attrs((props) => ({ src: props.src }))`
  display: block;
  width: 100%;
  height: 100%;
`;

const Insta = styled.iframe.attrs((props) => ({ src: props.src }))`
  width: 1200px;
  height: 784px;
  border: 0;
  overflow: hidden;
`;

const SnsSection = () => {
  const {
    sns: { title, logo, subTitle },
  } = data;

  // axios json-server
  // const [insta, setInsta] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3001/insta');
  //       setInsta(response.data);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   })();
  // }, []);

  return (
    <SnsSectionContainer className="container">
      {/* title */}
      <h3 className="title">
        <img src={title} alt="title" />
      </h3>
      {/* sns */}
      <nav className="sns">
        <ul>
          {logo.map((v, i) => (
            <li key={i}>
              <Link to="/">
                <img src={v} alt="logo" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* sub title */}
      <h4 className="title">
        <Link to="/">
          <img src={subTitle} alt="title" />
        </Link>
      </h4>
      {/* instagram */}
      {/* <div className="insta">
        {insta.map((v, i) => (
          <div key={i} className="thumb">
            <ThumbImg src={v.src} />
          </div>
        ))}
      </div> */}
      <div className="insta">
        <Insta src="https://www.attractt.com/embed/grid/LEDo66DdnaG4Rdw?loc=http://www.baskinrobbins.co.kr/&target=attractt-ifm-0" />
      </div>
    </SnsSectionContainer>
  );
};

export default SnsSection;
