import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  author?: SortOrder;
  commentAuthor?: SortOrder;
  commentContent?: SortOrder;
  commentCreatedAt?: SortOrder;
  commentTweet?: SortOrder;
  commentUpdatedAt?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  tweetId?: SortOrder;
  updatedAt?: SortOrder;
};
