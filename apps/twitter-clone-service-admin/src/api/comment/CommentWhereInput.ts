import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  commentAuthor?: StringNullableFilter;
  commentContent?: StringNullableFilter;
  commentCreatedAt?: DateTimeNullableFilter;
  commentTweet?: StringNullableFilter;
  commentUpdatedAt?: DateTimeNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  tweet?: TweetWhereUniqueInput;
};
