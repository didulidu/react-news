import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import useDeviceDetect from 'utils/useIsMobile';

const MainWrapper = styled.div`
  position: relative;
  overflow-y: hidden;
  overflow-x: ${(props) => (props.isMobile ? 'auto' : 'hidden')};
  height: ${(props) => props.height}rem;
  width: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  > div {
    position: absolute;
    display: flex;
    align-items: flex-start;
  }
`;

const HorizontalHoverScroller = ({
  children,
  listWrapperStyle,
  height,
  marginStart,
  padding = 60,
}) => {
  const mainWrap = useRef(null);
  const innerWrap = useRef(null);
  const { isMobile } = useDeviceDetect();
  //   used https://jsfiddle.net/vhbtj3kp/1/ as example
  const damp = 5; // Mouse move response softness
  let posX = 0;
  let width = 0;
  let mmAAr = 0;
  let mmAA = 0;
  let wDiff = 0;
  let marginLeft = 0;

  useEffect(() => {
    innerWrap.current.style.marginLeft = `${padding}px`;
    innerWrap.current.scrollTo(0, 0);
  }, [children]);

  const handleMouseMove = (e) => {
    if (innerWrap.current.scrollWidth < window.innerWidth) {
      return;
    }

    const fullWidth = mainWrap.current.offsetWidth;
    width = fullWidth - padding;
    wDiff = innerWrap.current.scrollWidth / width - 1;
    mmAA = fullWidth - padding * 2;
    mmAAr = fullWidth / mmAA;

    const mousePosition = e.screenX - mainWrap.current.offsetLeft;
    const modifiedMousePosition =
      Math.min(Math.max(0, mousePosition - padding), mmAA) * mmAAr;
    posX += (modifiedMousePosition - posX) / damp;
    marginLeft = -posX * wDiff + padding;
    innerWrap.current.style.marginLeft = `${marginLeft}px`;
  };

  return (
    <MainWrapper
      ref={mainWrap}
      height={height}
      onMouseMove={!isMobile ? handleMouseMove : null}
      isMobile={isMobile}
    >
      <div ref={innerWrap} css={[listWrapperStyle, marginStart]}>
        {children}
      </div>
    </MainWrapper>
  );
};
HorizontalHoverScroller.propTypes = {
  children: PropTypes.node,
  padding: PropTypes.number,
  marginStart: PropTypes.object,
  height: PropTypes.number,
  listWrapperStyle: PropTypes.object,
};
export default HorizontalHoverScroller;
