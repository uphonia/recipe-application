export const useAllRecipes = () => {
  const handleFavoriteOnClick = (index: number) => {
    // API call to set favorite based on index
  };

  const handleOnClick = (index: number) => {
    // redirect to individual recipe page
  };

  const handleDeleteOnClick = (index: number) => {
    // pop-up modal to confirm deletion
  };

  const onDelete = (index: number) => {
    // API call to delete recipe based on index
  };

  return {
    handleDeleteOnClick,
    handleFavoriteOnClick,
    handleOnClick,
  };
};
