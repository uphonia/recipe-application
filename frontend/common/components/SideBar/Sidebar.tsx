import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";

import { CREATE_RECIPE, HOME, ORGANIZE } from "../../consts/navigation.consts";

import {
  Wrapper,
  NavigationWrapper,
  Navigation,
  SubNavigation,
  LogOutButton,
  LogOutButtonWrapper,
} from "./sideBar.styles";
import { useSideBar } from "./sideBar.hooks";

export const SideBar = () => {
  const { handleLogOut, isActive } = useSideBar();

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
        <Link href={ORGANIZE} passHref>
          <SubNavigation selected={isActive(ORGANIZE)}>Organize</SubNavigation>
        </Link>
        {/* TODO - temp button. need to make it cohesive with rest of app style */}
        <LogOutButtonWrapper>
          <LogOutButton onClick={handleLogOut}>
            Log Out <LogoutIcon />
          </LogOutButton>
        </LogOutButtonWrapper>
      </NavigationWrapper>
    </Wrapper>
  );
};
