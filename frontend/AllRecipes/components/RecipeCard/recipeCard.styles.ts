import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mq } from "../../../common/utils/mediaQueries";

export const Wrapper = styled.div`
  background-color: #f2f0f0;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 300px;
  position: relative;

  ${mq.medium(css`
    width: 200px;
  `)}
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  padding: 24px;
  position: relative;
`;

export const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 3;
  text-align: center;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Image = styled.img`
  border-radius: 8px 8px 0px 0px;
  height: 50%;
  object-fit: stretch;
  position: relative;
`;

export const CardFooter = styled.div`
  bottom: 4px;
  position: absolute;
  right: 4px;
`;

export const Date = styled.p`
  color: black;
  font-size: 12px;
  font-weight: 400;
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  position: absolute;
  right: 8px;
  top: 8px;
`;

type IconButtonProps = {
  isOnTop?: boolean;
};

export const IconButton = styled.button<IconButtonProps>`
  align-items: center;
  background-color: transparent;
  border-radius: 4px;
  display: flex;
  padding: 2px;

  &:hover {
    background-color: #d3d3d3d3;
    cursor: pointer;
  }

  ${({ isOnTop }) =>
    isOnTop &&
    css`
      right: 4px;
      position: absolute;
      top: 4px;
    `}
`;

export const EmptyImage = styled.div`
  align-items: center;
  border-bottom: 1px solid black;
  display: flex;
  height: 50%;
  justify-content: center;
  position: relative;
`;
