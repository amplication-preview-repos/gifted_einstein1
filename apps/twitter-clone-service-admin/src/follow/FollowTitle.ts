import { Follow as TFollow } from "../api/follow/Follow";

export const FOLLOW_TITLE_FIELD = "followedId";

export const FollowTitle = (record: TFollow): string => {
  return record.followedId?.toString() || String(record.id);
};
