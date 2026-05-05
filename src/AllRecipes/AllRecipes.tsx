import React from "react";

import { Layout } from "../common/components/Layout/Layout";
import { Search } from "./components/Search/Search";
import { Sidebar } from "../common/components/SideBar/Sidebar";
import { RecipeCard } from "./components/RecipeCard/RecipeCard";
import { Wrapper, RecipeList } from "./allRecipes.styles";
import { mockData } from "./allRecipes.consts";
import { useAllRecipes } from "./allRecipes.hooks";
import { ConfirmationModal } from "../common/components/ConfirmationModal/ConfirmationModal";

export const AllRecipes = () => {
  const {
    closeModal,
    handleDeleteOnClick,
    handleFavoriteOnClick,
    handleOnClick,
    isModalOpen,
  } = useAllRecipes();

  return (
    <>
      <Layout
        content={
          <Wrapper>
            <Search />
            <RecipeList>
              {mockData.map((recipe, index) => (
                <RecipeCard
                  createdDate={recipe.createdDate}
                  image={recipe.image}
                  isFavorited={recipe.isFavorited}
                  key={index}
                  name={recipe.name}
                  onClick={() => handleOnClick(index)}
                  onDelete={() => handleDeleteOnClick(index)}
                  onFavorite={() => handleFavoriteOnClick(index)}
                />
              ))}
            </RecipeList>
          </Wrapper>
        }
        sidebar={<Sidebar />}
      />
      <ConfirmationModal
        closeModal={closeModal}
        description="Do you want to delete this recipe?"
        isOpen={isModalOpen}
        title="Delete"
      />
    </>
  );
};
