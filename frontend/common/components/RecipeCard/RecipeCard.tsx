import FavoritedIcon from "@mui/icons-material/Favorite";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import EmptyImageStateIcon from "@mui/icons-material/Restaurant";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Wrapper,
  Image,
  EmptyImage,
  Title,
  Text,
  IconButton,
  CardFooter,
  Content,
  ActionButtons,
} from "./recipeCard.styles";

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

export const RecipeCard = ({
  createdByText,
  createdDate,
  imageUrl,
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
      {imageUrl ? (
        <Image src={imageUrl} /> // TODO
      ) : (
        <EmptyImage>
          <EmptyImageStateIcon />
        </EmptyImage>
      )}
      <IconButton isOnTop onClick={(e) => handleOnFavorite(e)}>
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
          <Text>{createdDate}</Text>
          <Text>Created by {createdByText}</Text>
        </CardFooter>
      </Content>
    </Wrapper>
  );
};
