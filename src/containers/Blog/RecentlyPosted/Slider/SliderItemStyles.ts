import styled from 'styled-components';

type Props = {
  zoomFactor: number;
  slideMargin: number;
  visibleSlides: number;
  className: string;
};

export const StyledSliderItem = styled.div<Props>`
  transition: transform 500ms ease;
  cursor: pointer;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  transform: scale(1);
  user-select: none;
  flex: 0 0 calc (100% / ${(props) => props.visibleSlides} - ${(props) => props.slideMargin * 2}px);
  &:last-child {
    margin-right: 15px;
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 1.5vw;
    box-sizing: border-box;
  }
  :hover {
    transform: scale(${(props) => props.zoomFactor / 50 + 1}) !important;
  }
  :hover ~ * {
    transform: translateX(${(props) => `${props.zoomFactor / 2}%`}) !important;
  }
  &.left {
    transform-origin: left;
    :hover ~ * {
      transform: translateX(${(props) => `${props.zoomFactor}%`}) !important;
    }
  }
  &.right {
    transform-origin: right;
    :hover ~ * {
      transform: translateX(0%) !important;
    }
  }
`;
