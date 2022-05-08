import React from 'react';
import styled from 'styled-components';
import data from '../data';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const EventSectionContainer = styled.div`
  height: 721px;

  .title {
    padding: 100px 0 50px;
  }
  .swiper {
    overflow: hidden;

    .swiper-wrapper {
      width: 9600px;
      overflow: hidden;

      .swiper-slide {
        float: left;
        width: 1200px;
        left: 0px;
        transition-duration: 0ms;
        transform: translateX(0px);
      }
    }

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      border: 0;
      margin: 0 10px !important;
      background-color: #cdccd5;
      transition: all 0.1s ease-in-out;
      opacity: 1;
    }

    .swiper-pagination-bullet-active {
      width: 9px;
      height: 9px;
      background-color: #301d17;
    }
  }
`;

const BannerList = styled.div`
  width: 1200px;
  left: 0px;

  ul {
    display: flex;
    align-items: center;
    margin-left: -16px;

    li {
      float: left;
      width: 25%;
      min-height: 493px;
      padding-left: 16px;

      .bannerImage {
        margin-bottom: 22px;
        width: 286px;
        border-radius: 3px;
        border: 1px solid #eaeaea;

        img {
          display: block;
          width: 100%;
        }
      }

      .bannerType {
        margin-bottom: 8px;
      }

      .bannerTitle {
        margin-bottom: 11px;
        color: #2f231c;
        font-size: 17px;
        line-height: 23px;
      }

      .bannerPeriod {
        margin-bottom: 11px;
        font-weight: 300;
        color: #948780;
      }
    }
  }
`;

const BannerListItem = ({ img, type, tit, period }) => {
  return (
    <li>
      <Link to="/">
        <div className="banner">
          <div className="bannerImage">
            <img src={img} alt="banner" />
          </div>
          <div className="bannerType">
            <img src={type} alt="store event" />
          </div>
          <div className="bannerTitle">{tit}</div>
          <div className="bannerPeriod">{period}</div>
        </div>
      </Link>
    </li>
  );
};

const EventSection = () => {
  const {
    event: { title, banner },
  } = data;

  const pagination = {
    clickable: true,
  };

  return (
    <EventSectionContainer className="container">
      <h3 className="title">
        <img src={title} alt="title" />
      </h3>

      <Swiper
        className="mySwiper"
        pagination={pagination}
        modules={[Pagination]}
      >
        {banner.map((v1, i1) => (
          <SwiperSlide key={i1}>
            <BannerList>
              <ul>
                {v1.map((v2, i2) => (
                  <BannerListItem
                    key={i2}
                    img={v2.img}
                    type={v2.type}
                    tit={v2.tit}
                    period={v2.period}
                  />
                ))}
              </ul>
            </BannerList>
          </SwiperSlide>
        ))}
      </Swiper>
    </EventSectionContainer>
  );
};

export default EventSection;
