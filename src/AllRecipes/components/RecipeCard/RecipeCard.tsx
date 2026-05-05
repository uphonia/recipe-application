import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import FavoritedIcon from "@mui/icons-material/Favorite";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import EmptyImageStateIcon from '@mui/icons-material/Restaurant';

import {
  Wrapper,
  Info,
  Image,
  EmptyImage,
  Title,
  Date,
  ActionButtons,
  IconButton,
  CardFooter,
  Content,
} from "./recipeCard.styles";

type Props = {
  createdDate: string;
  image?: string;
  isFavorited: boolean;
  name: string;
};

export const RecipeCard = ({
  createdDate,
  image,
  isFavorited,
  name,
}: Props) => {
  const onFavoriteClick = async () => {
    // endpoint to set isFavorited field
  };

  return (
    <Wrapper>
      {image ? <Image src={image} /> : <EmptyImage><EmptyImageStateIcon /></EmptyImage>}
      <IconButton isOnTop onClick={onFavoriteClick}>
        {isFavorited ? (
          <FavoritedIcon style={{ color: "#e01126" }} stroke="white" />
        ) : (
          <FavoriteIcon style={{ color: "white" }}  />
        )}
      </IconButton>
      <Content>
        <Info>
          <Title>{name}</Title>
        </Info>
        <ActionButtons>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </ActionButtons>
        <CardFooter>
          <Date>{createdDate}</Date>
        </CardFooter>
      </Content>
    </Wrapper>
  );
};
