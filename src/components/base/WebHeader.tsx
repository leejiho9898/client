import { TextLogo } from 'assets/Img';
import LeftHeaderBox from 'components/base/LeftHeaderBox';
import { mediaMinQuery, mediaSize } from 'libs/styles/media';
import React from 'react';
import { Link } from 'react-router-dom';
import Path from 'routes/Path';
import styled from 'styled-components';
import RightHeaderBox from './RightHeaderBox';

const WebHeaderBlock = styled.div`
  display: none;
  position: relative;
  ${mediaMinQuery(mediaSize.large)} {
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
    color: black;
    max-width: ${mediaSize.xlarge}px;
    margin: 0 auto;
  }
`;

const LogoStyled = styled.img`
  width: 120px;
  height: 100px;
`;

function WebHeader() {
  return (
    <WebHeaderBlock>
      <LeftHeaderBox />
      <Link to={Path.LandingPage}>
        <LogoStyled src={TextLogo} alt="사이트 로고" />
      </Link>
      <RightHeaderBox />
    </WebHeaderBlock>
  );
}

export default WebHeader;
