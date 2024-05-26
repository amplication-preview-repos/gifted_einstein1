import { CommentCreateNestedManyWithoutTweetsInput } from "./CommentCreateNestedManyWithoutTweetsInput";
import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutTweetsInput;
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  tweetAuthor?: string | null;
  tweetContent?: string | null;
  tweetCreatedAt?: Date | null;
  tweetUpdatedAt?: Date | null;
};
