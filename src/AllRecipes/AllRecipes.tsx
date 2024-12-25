import React from "react";

import { Layout } from "../common/components/Layout/Layout";
import { Search } from "./components/Search/Search";
import { Sidebar } from "../common/components/SideBar/Sidebar";

export const AllRecipes = () => {
  return (
    <Layout
      content={
        <>
          <Search />
        </>
      }
      sidebar={<Sidebar />}
    />
  );
};
