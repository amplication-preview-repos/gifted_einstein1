import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  tweetAuthor?: SortOrder;
  tweetContent?: SortOrder;
  tweetCreatedAt?: SortOrder;
  tweetUpdatedAt?: SortOrder;
  updatedAt?: SortOrder;
};
