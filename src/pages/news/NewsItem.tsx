import { Delete } from "@mui/icons-material";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { useAppDispatch } from "hooks/useTyped";
import i18n from "service/i18/i18n";
import { deleteNewsItems } from "store/newsSlice";
import { GridItem } from "./News.styled";

interface Props {
  itemId: number;
  title: string;
  description: string;
}

export const NewsItem: React.FC<Props> = ({ itemId, title, description }) => {
  const dispatch = useAppDispatch();
  const media = useMediaQuery("(max-width:750px)");
  const handleDeleteNewsItem = () => {
    dispatch(deleteNewsItems(itemId));
  };
  return (
    <GridItem item xs={media ? 10 : 3}>
      <Typography variant="h6">{title}</Typography>
      <Typography>{description}</Typography>
      <Button onClick={handleDeleteNewsItem}>
        <Delete />
        {i18n.t("DeleteButton")}
      </Button>
    </GridItem>
  );
};
