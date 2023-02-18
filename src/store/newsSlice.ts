import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiGetNewsList } from "service/api/apiNews";
import { NewsData, NewsProps } from "types/newsTypes";

const initialState: NewsProps = {
  newsData: [],
  status: "fulfilled",
};

export const fetchNewsData = createAsyncThunk<NewsData[]>(
  "newsData/fetchNewsData",
  async () => {
    const response: NewsData[] = await apiGetNewsList();
    console.log(response);
    return response;
  }
);

const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {
    handleAddNews(state, action: PayloadAction<NewsData[]>) {
      state.newsData = [...action.payload];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNewsData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        newsSlice.caseReducers.handleAddNews(state, action);
      })
      .addCase(fetchNewsData.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const {} = newsSlice.actions;

export default newsSlice.reducer;
