import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bio?: string | null;
  email?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  password?: string | null;
  profileImage?: InputJsonValue;
  username?: string | null;
};
