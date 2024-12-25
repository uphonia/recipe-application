import React from "react";

type Props = {
  handleDelete: () => void;
  handleSubmit: () => void;
  index: number;
};

export const InputSubmit = ({ handleDelete, handleSubmit, index }: Props) => {
  return (
    <>
      <input /> <button onClick={handleSubmit}>+</button>{" "}
      <button onClick={handleDelete}>x</button>
    </>
  );
};
