import { useState } from "react";
import { useSwitch } from "../common/hooks/useSwitch";
import { useRouter } from "next/router";
import { RECIPE } from "../common/consts/navigation.consts";

export const useAllRecipes = () => {
  const { push } = useRouter();

  const [indexToDelete, setIndexToDelete] = useState<number | null>(null);

  const {
    isOn: isModalOpen,
    turnOff: closeModal,
    turnOn: openModal,
  } = useSwitch();

  const handleFavoriteOnClick = (index: number) => {
    // API call to set favorite based on index (not async)
  };

  const handleOnClick = (index: number) => {
    // redirect to individual recipe page
    push(`${RECIPE}/${index}`);
  };

  const handleDeleteOnClick = (index: number) => {
    // pop-up modal to confirm deletion
    setIndexToDelete(index);
    openModal();
  };

  const handleDeleteConfirm = () => {
    // API call to delete recipe based on index
    closeModal();
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
