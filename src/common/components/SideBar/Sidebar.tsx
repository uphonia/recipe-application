import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Wrapper,
  NavigationWrapper,
  Navigation,
  SubNavigation,
} from "./sideBar.styles";
import { CREATE_RECIPE, HOME } from "./sideBar.consts";

export const Sidebar = () => {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;

  return (
    <Wrapper>
      <NavigationWrapper>
        <Link href={HOME} passHref>
          <Navigation selected={isActive(HOME)}>Home</Navigation>
        </Link>
        <Link href={CREATE_RECIPE} passHref>
          <SubNavigation selected={isActive(CREATE_RECIPE)}>
            Create
          </SubNavigation>
        </Link>
      </NavigationWrapper>
    </Wrapper>
  );
};
