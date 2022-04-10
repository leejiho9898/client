import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';

const Container = styled.section`
  padding-bottom: 0px;
  height: 70px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;
const Wrapper = styled.ul`
  display: table;
  width: 100%;
  text-align: left;
  color: white;
  height: 100%;

  li {
    display: table-cell;
    vertical-align: middle;
    :nth-of-type(1) {
      padding-left: 25px;
      width: 35%;
      position: relative;
      span {
        color: #ff5400;
        em {
          display: block;
          color: white;
        }
      }
    }
    :nth-of-type(2) {
      width: 65%;
      text-align: center;
      span {
        font-size: 20px;
        font-family: 'Lato';
        font-weight: 600;
      }
    }
  }
`;
const Text = styled.span`
  font-weight: 300;
  letter-spacing: -0.5px;
`;

function CartBottomBtn() {
  return (
    <Container>
      <Button width="100%" height="100%" buttonColor="black">
        <Wrapper>
          <li>
            <Text>
              2,425,000원
              <em>(총 2개 상품)</em>
            </Text>
          </li>
          <li>
            <Text>주문하기</Text>
          </li>
        </Wrapper>
      </Button>
    </Container>
  );
}

export default CartBottomBtn;
