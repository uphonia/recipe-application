import React from "react";

import {
  Wrapper,
  Image,
  NavigationWrapper,
  Navigation,
} from "./sideBar.styles";

export const Sidebar = () => {
  return (
    <Wrapper>
      <NavigationWrapper>
        <Navigation>Home</Navigation>
        <Navigation>Contact</Navigation>
      </NavigationWrapper>
    </Wrapper>
  );
};
