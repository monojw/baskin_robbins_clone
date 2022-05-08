import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Meta = (props) => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta charset="utf-8" />
          <title>{props.title}</title>

          {/* SEO 태그 */}
          <meta name="description" content={props.description} />
          <meta name="keywords" content={props.keywords} />
          <meta name="author" content={props.author} />

          <meta name="og:type" content="website" />
          <meta name="og:title" content={props.title} />
          <meta name="og:description" content={props.description} />
          <meta name="og:url" content={props.url} />

          {/* 웹폰트 적용을 위한 외부 리소스 참조 */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Source+Sans+Pro:wght@300;400&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      </HelmetProvider>
    </div>
  );
};

Meta.defaultProps = {
  title: 'BaskinRobbins Clone',
  description: '베스킨라빈스 클론 사이트입니다.',
  keywords: 'React, Clone, baskin, robbins',
  author: 'monojw',
  url: window.location.href,
};

export default Meta;
