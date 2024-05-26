import { Like } from "../like/Like";
import { JsonValue } from "type-fest";

export type User = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  likes?: Array<Like>;
  password: string | null;
  profileImage: JsonValue;
  updatedAt: Date;
  username: string | null;
};
