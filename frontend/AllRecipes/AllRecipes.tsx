import { format } from "date-fns";

import { ConfirmationModal } from "../common/components/ConfirmationModal/ConfirmationModal";
import { RecipeCard } from "./components/RecipeCard/RecipeCard";
import { Filter } from "./components/Filter/Filter";
import { EmptyState } from "./components/EmptyState/EmptyState";

import { Wrapper, RecipeList } from "./allRecipes.styles";
import { useAllRecipes } from "./allRecipes.hooks";
import { createdByWhom } from "./utils/createdByWhom";

export const AllRecipes = () => {
  const {
    closeModal,
    currentUserId,
    handleDeleteOnClick,
    handleDeleteConfirm,
    handleFavoriteOnClick,
    handleOnClick,
    isModalOpen,
    recipes,
  } = useAllRecipes();

  if (!recipes.length) {
    return <EmptyState />;
  }

  return (
    <>
      <Wrapper>
        <RecipeList>
          {recipes.map((recipe) => {
            const createdDate = format(new Date(recipe.createdAt), "MM/dd/yy");
            const allowDelete = recipe.createdBy === currentUserId;
            return (
              <RecipeCard
                createdByText={createdByWhom(recipe.createdBy, currentUserId)}
                createdDate={createdDate}
                imageUrl={recipe.fileUrl}
                isDeletable={allowDelete}
                isFavorited={recipe.favorited}
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
