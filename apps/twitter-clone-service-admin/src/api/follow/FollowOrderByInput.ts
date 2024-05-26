import { SortOrder } from "../../util/SortOrder";

export type FollowOrderByInput = {
  createdAt?: SortOrder;
  followedId?: SortOrder;
  followerId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
