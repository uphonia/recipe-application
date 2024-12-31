import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import FavoritedIcon from "@mui/icons-material/Favorite";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";

import {
  Wrapper,
  Info,
  Image,
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
}: Props) => (
  <Wrapper>
    <Content>
      <Image src={image} />
      <Info>
        <Title>{name}</Title>
        <ActionButtons>
          <IconButton>
            {isFavorited ? <FavoritedIcon /> : <FavoriteIcon />}
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </ActionButtons>
      </Info>
    </Content>
    <CardFooter>
      <Date>{createdDate}</Date>
    </CardFooter>
  </Wrapper>
);
