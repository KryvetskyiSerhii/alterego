import { Box, Button, Container, Grid } from "@mui/material";
import { Loader } from "components/Loader";
import { useAppDispatch, useAppSelector } from "hooks/useTyped";
import { useState } from "react";
import { useEffect } from "react";
import i18n from "service/i18/i18n";
import { fetchNewsData } from "store/newsSlice";
import { GridContainer } from "./News.styled";
import { NewsItem } from "./NewsItem";

export const News: React.FC = () => {
  const newsData = useAppSelector((state) => state.newsSlice.newsData);
  const status = useAppSelector((state) => state.newsSlice.status);
  const dispatch = useAppDispatch();

  const [numberOfItemsVisible, setNumberOfItemsVisible] = useState<number>(10);

  const handleShowMoreNewsItems = () => {
    setNumberOfItemsVisible((prev) => prev + 10);
  };

  const handleNewsData = () => {
    if (newsData.length > 0) return;
    else dispatch(fetchNewsData());
  };

  useEffect(() => {
    handleNewsData();
  }, []);
  return (
    <>
      {status === "pending" ? (
        <Loader />
      ) : (
        <Container
          maxWidth="lg"
          sx={{
            "@media (max-width: 600px)": {
              flexDirection: "column",
            },
            "@media (min-width: 600px)": {
              flexWrap: "wrap",
            },
            "@media (min-width: 960px)": {
              justifyContent: "center",
            },
          }}
        >
          <GridContainer container spacing={2}>
            {newsData.length > 0
              ? newsData
                  .slice(0, numberOfItemsVisible)
                  .map((item) => (
                    <NewsItem
                      key={item.id}
                      itemId={item.id}
                      title={item.title}
                      description={item.body}
                    />
                  ))
              : null}
          </GridContainer>

          <Button variant="contained" onClick={handleShowMoreNewsItems}>
            {i18n.t("AddMoreItems")}
          </Button>
        </Container>
      )}
    </>
  );
};
