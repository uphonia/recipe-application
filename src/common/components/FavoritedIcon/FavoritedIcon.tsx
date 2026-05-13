import FavoriteActive from "@mui/icons-material/Favorite";
import FavoriteInactive from "@mui/icons-material/FavoriteBorder";

import { IconButton } from "./favoritedIcon.styles";

type Props = {
  isFavorite: boolean;
  onClick: () => void;
};

export const FavoritedIcon = ({ isFavorite, onClick }: Props) => (
  <IconButton onClick={onClick}>
    {isFavorite ? (
      <FavoriteActive style={{ color: "#e01126" }} />
    ) : (
      <FavoriteInactive style={{ color: "white" }} />
    )}
  </IconButton>
);
