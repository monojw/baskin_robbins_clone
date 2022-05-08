import React from 'react';
import styled from 'styled-components';
import data from '../data';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const MainBannerContainer = styled.div`
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border: 0;
    margin: 0 10px !important;
    background-color: #fff;
    transition: all 0.1s ease-in-out;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    width: 13px;
    height: 13px;
    background-color: #301d17;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    display: block;
    width: 109px;
    height: 109px;
    margin-top: -54px;
  }

  .swiper-button-prev {
    left: 20px;
    background: url('https://www.baskinrobbins.co.kr/assets/images/main/btn_banner_prev.png');
  }

  .swiper-button-next {
    right: 20px;
    background: url('https://www.baskinrobbins.co.kr/assets/images/main/btn_banner_next.png');
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
`;

const BannerTop = styled.div`
  a {
    display: block;
    height: 150px;
    background: #ffd825 ${(props) => `url(${props.bgImg}) 50% 0 no-repeat`};
    margin-bottom: 3px;
  }
`;

const BannerListItem = styled.li`
  a {
    display: block;
    height: 697px;
    background-color: ${(props) => props.bgColor};
    background-image: ${(props) => `url(${props.bgImg})`};
    background-repeat: no-repeat;
    background-position: 50% 0;
  }
`;

const MainBanner = () => {
  const {
    banner: { top, bottom },
  } = data;

  const pagination = {
    clickable: true,
  };

  const autoplay = {
    delay: 4000,
    disableOnInteraction: false,
  };

  return (
    <MainBannerContainer>
      {/* Banner Top */}
      <BannerTop bgImg={top}>
        <Link to="/"></Link>
      </BannerTop>

      {/* Banner Bottom */}
      <Swiper
        className="mySwiper"
        pagination={pagination}
        navigation={true}
        autoplay={autoplay}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {bottom.map((v, i) => (
          <SwiperSlide key={i}>
            <BannerListItem bgImg={v.bgImg} bgColor={v.bgColor}>
              <Link to="/"></Link>
            </BannerListItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </MainBannerContainer>
  );
};

export default MainBanner;
