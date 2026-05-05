import React from "react";

import {
  Wrapper,
  NavigationWrapper,
  Navigation,
  SubNavigation
} from "./sideBar.styles";

export const Sidebar = () => {
  return (
    <Wrapper>
      <NavigationWrapper>
        <Navigation>Home</Navigation>
        <SubNavigation>Create</SubNavigation>
      </NavigationWrapper>
    </Wrapper>
  );
};
