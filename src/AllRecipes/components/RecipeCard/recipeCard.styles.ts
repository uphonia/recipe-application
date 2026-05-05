import styled from "@emotion/styled";
import { mq } from "../../../common/utils/mediaQueries";
import { css } from "@emotion/react";

export const Wrapper = styled.div`
  background-color: #f2f0f0;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 180px;
  position: relative;
  width: 100%;

  ${mq.medium(css`
    max-width: 300px;
  `)}
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  padding: 24px;
  position: relative;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  padding-top: 10px;
`;

export const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100px;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Image = styled.img`
  border-radius: 8px 0px 0px 8px;
  position: relative;
  width: 150px;
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
      left: 4px;
      position: absolute;
      top: 4px;
    `}
`;
