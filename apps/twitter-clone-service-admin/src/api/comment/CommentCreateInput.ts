import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  commentAuthor?: string | null;
  commentContent?: string | null;
  commentCreatedAt?: Date | null;
  commentTweet?: string | null;
  commentUpdatedAt?: Date | null;
  content?: string | null;
  tweet?: TweetWhereUniqueInput | null;
};
