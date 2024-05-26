import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TweetWhereInput = {
  author?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  tweetAuthor?: StringNullableFilter;
  tweetContent?: StringNullableFilter;
  tweetCreatedAt?: DateTimeNullableFilter;
  tweetUpdatedAt?: DateTimeNullableFilter;
};
