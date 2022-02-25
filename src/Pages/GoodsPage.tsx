import GoodsInfo from 'components/Goods/GoodsInfo';
import React from 'react';
import styled from 'styled-components';

const GoodsDetailWrapper = styled.div`
  padding: 30px;
`;

const GoodsImg = styled.img`
  /* width: 800px; */
  display: block;
  margin: 0 auto;
`;

function GoodsPage() {
  return (
    <>
      <GoodsInfo />
      <GoodsDetailWrapper>
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
      </GoodsDetailWrapper>
    </>
  );
}

export default GoodsPage;
