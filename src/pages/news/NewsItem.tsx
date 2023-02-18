import { useAppDispatch } from "hooks/useTyped";
import { deleteNewsItems } from "store/newsSlice";

interface Props {
  itemId: number;
  title: string;
  description: string;
}

export const NewsItem: React.FC<Props> = ({ itemId, title, description }) => {
  const dispatch = useAppDispatch();

  const handleDeleteNewsItem = () => {
    dispatch(deleteNewsItems(itemId));
  };
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <button onClick={handleDeleteNewsItem}>Delete</button>
    </div>
  );
};
