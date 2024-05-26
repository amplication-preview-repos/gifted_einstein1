import { Tweet } from "../tweet/Tweet";

export type Comment = {
  author: string | null;
  commentAuthor: string | null;
  commentContent: string | null;
  commentCreatedAt: Date | null;
  commentTweet: string | null;
  commentUpdatedAt: Date | null;
  content: string | null;
  createdAt: Date;
  id: string;
  tweet?: Tweet | null;
  updatedAt: Date;
};
