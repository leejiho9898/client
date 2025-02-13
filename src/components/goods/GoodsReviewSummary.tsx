import React from 'react';
import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
import { palette } from 'libs/styles/palette';
import {
  FlexBetween,
  FlexCenter,
  ListHead,
} from 'components/common/CommonComponents';
import Button from 'components/common/Button';
import ReviewScoreBox from './ReviewScoreBox';

const ReviewWrapper = styled.div`
  margin: 0px 30px;
  .full-width {
    width: 100%;
  }
`;
const SummaryBox = styled(FlexBetween)`
  padding: 32px 0px;
`;

const RatingSummaryBox = styled.div`
  border-right: 1px solid ${palette.border};
  width: 400px;
  text-align: center;
`;

const Rating = styled.div`
  font-size: 48px;
`;

const SummaryEle = styled(FlexCenter)`
  margin: 13px 0px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #14161a;
`;
function GoodsReviewSummary() {
  return (
    <ReviewWrapper>
      <ListHead>Review</ListHead>
      <SummaryBox>
        <RatingSummaryBox>
          구매 만족도
          <SummaryEle>
            <BsStarFill color="coral" size="42" />
            <Rating>4.9</Rating>
          </SummaryEle>
          <Button
            width="160px"
            height="50px"
            buttonColor="hoverDarkColor"
            fontColor="#eee"
            hoverButtonColor="backgroundHover"
            hoverFontColor="hoverDarkColor"
          >
            상품 리뷰 작성하기
          </Button>
        </RatingSummaryBox>
        <div className="full-width">
          <ReviewScoreBox
            tit="아주 좋아요"
            reviewScore={90}
            reviewCount={363}
          />
          <ReviewScoreBox tit="맘에 들어요" reviewScore={5} reviewCount={29} />
          <ReviewScoreBox tit="보통이에요" reviewScore={1} reviewCount={2} />
          <ReviewScoreBox tit="그냥 그래요" reviewScore={1} reviewCount={1} />
          <ReviewScoreBox tit="별로에요" reviewScore={3} reviewCount={3} />
        </div>
      </SummaryBox>
    </ReviewWrapper>
  );
}

export default GoodsReviewSummary;
