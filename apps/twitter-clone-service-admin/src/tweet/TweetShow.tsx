import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TWEET_TITLE_FIELD } from "./TweetTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TweetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="author" source="author" />
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="TweetAuthor" source="tweetAuthor" />
        <TextField label="TweetContent" source="tweetContent" />
        <TextField label="TweetCreatedAt" source="tweetCreatedAt" />
        <TextField label="TweetUpdatedAt" source="tweetUpdatedAt" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Comment"
          target="tweetId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="author" source="author" />
            <TextField label="CommentAuthor" source="commentAuthor" />
            <TextField label="CommentContent" source="commentContent" />
            <TextField label="CommentCreatedAt" source="commentCreatedAt" />
            <TextField label="CommentTweet" source="commentTweet" />
            <TextField label="CommentUpdatedAt" source="commentUpdatedAt" />
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="tweet" source="tweet.id" reference="Tweet">
              <TextField source={TWEET_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Like" target="tweetId" label="Likes">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="tweet" source="tweet.id" reference="Tweet">
              <TextField source={TWEET_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};