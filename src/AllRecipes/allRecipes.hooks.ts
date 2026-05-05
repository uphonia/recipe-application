import { useState } from "react";
import { useSwitch } from "../common/hooks/useSwitch";

export const useAllRecipes = () => {
  const [indexToDelete, setIndexToDelete] = useState<number | null>(null);

  const {
    isOn: isModalOpen,
    turnOff: closeModal,
    turnOn: openModal,
  } = useSwitch();

  const handleFavoriteOnClick = (index: number) => {
    // API call to set favorite based on index
  };

  const handleOnClick = (index: number) => {
    // redirect to individual recipe page
  };

  const handleDeleteOnClick = (index: number) => {
    // pop-up modal to confirm deletion
    setIndexToDelete(index);
    openModal();
  };

  const handleDeleteConfirm = (index: number) => {
    // API call to delete recipe based on index
  };

  return {
    closeModal,
    handleDeleteOnClick,
    handleDeleteConfirm,
    handleFavoriteOnClick,
    handleOnClick,
    isModalOpen,
  };
};
