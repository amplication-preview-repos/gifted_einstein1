import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FollowWhereInput = {
  followedId?: StringNullableFilter;
  followerId?: StringNullableFilter;
  id?: StringFilter;
};
