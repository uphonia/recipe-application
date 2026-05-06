import React from "react";

import { Search } from "./components/Search/Search";
import { RecipeCard } from "./components/RecipeCard/RecipeCard";
import { Wrapper, RecipeList } from "./allRecipes.styles";
import { mockData } from "./allRecipes.consts";
import { useAllRecipes } from "./allRecipes.hooks";
import { ConfirmationModal } from "../common/components/ConfirmationModal/ConfirmationModal";

export const AllRecipes = () => {
  const {
    closeModal,
    handleDeleteOnClick,
    handleDeleteConfirm,
    handleFavoriteOnClick,
    handleOnClick,
    isModalOpen,
  } = useAllRecipes();

  return (
    <>
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
      <ConfirmationModal
        closeModal={closeModal}
        description="Do you want to delete this recipe?"
        isOpen={isModalOpen}
        onConfirm={handleDeleteConfirm}
        onConfirmText="Delete"
        title="Delete"
      />
    </>
  );
};
