import { format } from "date-fns";

import { RecipeCard } from "./components/RecipeCard/RecipeCard";
import { Wrapper, RecipeList } from "./allRecipes.styles";
import { useAllRecipes } from "./allRecipes.hooks";
import { ConfirmationModal } from "../common/components/ConfirmationModal/ConfirmationModal";
import { Filter } from "./components/Filter/Filter";

export const AllRecipes = () => {
  const {
    closeModal,
    handleDeleteOnClick,
    handleDeleteConfirm,
    handleFavoriteOnClick,
    handleOnClick,
    isModalOpen,
    recipes,
  } = useAllRecipes();

  return (
    <>
      <Wrapper>
        <RecipeList>
          {recipes.map((recipe) => {
            const createdDate = format(new Date(recipe.created_at), "MM/dd/yy");
            return (
              <RecipeCard
                createdDate={createdDate}
                image={recipe.image}
                isFavorited={false} // TODO
                key={recipe.id}
                name={recipe.name}
                onClick={() => handleOnClick(recipe.id)}
                onDelete={() => handleDeleteOnClick(recipe.id)}
                onFavorite={() => handleFavoriteOnClick(recipe.id)}
              />
            );
          })}
        </RecipeList>
        <Filter />
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
