import FavoritedIcon from "@mui/icons-material/Favorite";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Wrapper,
  Title,
  IconButton,
  CardFooter,
  Content,
  ActionButtons,
} from "./recipeRow.styles";
import { Typography } from "../Typography/Typography";

type Props = {
  createdByText: string;
  createdDate: string;
  imageUrl?: string;
  isDeletable?: boolean;
  isFavorited: boolean;
  name: string;
  onClick: () => void;
  onDelete?: () => void;
  onFavorite: () => void;
};

export const RecipeRow = ({
  createdByText,
  createdDate,
  isDeletable,
  isFavorited,
  name,
  onClick,
  onDelete,
  onFavorite,
}: Props) => {
  const handleOnDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    if (onDelete) onDelete();
  };

  const handleOnFavorite = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    onFavorite();
  };

  return (
    <Wrapper onClick={onClick}>
      <IconButton onClick={(e) => handleOnFavorite(e)}>
        {isFavorited ? (
          <FavoritedIcon style={{ color: "#e01126" }} stroke="white" />
        ) : (
          <FavoriteIcon style={{ color: "white" }} />
        )}
      </IconButton>
      <Content>
        <Title>{name}</Title>
        {/* TODO - update design */}
        <ActionButtons>
          {isDeletable && (
            <IconButton onClick={(e) => handleOnDelete(e)}>
              <DeleteIcon />
            </IconButton>
          )}
        </ActionButtons>
        <CardFooter>
          <Typography>Created by {createdByText}</Typography>
          <Typography>{createdDate}</Typography>
        </CardFooter>
      </Content>
    </Wrapper>
  );
};
