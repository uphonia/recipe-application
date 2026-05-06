import React from "react";
import Link from "next/link";

import {
  Wrapper,
  NavigationWrapper,
  Navigation,
  SubNavigation,
} from "./sideBar.styles";

export const Sidebar = () => {
  return (
    <Wrapper>
      <NavigationWrapper>
        <Link href="/" passHref>
          <Navigation>Home</Navigation>
        </Link>
        <Link href="/create-recipe" passHref>
          <SubNavigation>Create</SubNavigation>
        </Link>
      </NavigationWrapper>
    </Wrapper>
  );
};
