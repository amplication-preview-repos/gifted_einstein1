import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TweetTitle } from "../tweet/TweetTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="CommentAuthor" source="commentAuthor" />
        <TextInput label="CommentContent" multiline source="commentContent" />
        <DateTimeInput label="CommentCreatedAt" source="commentCreatedAt" />
        <TextInput label="CommentTweet" source="commentTweet" />
        <DateTimeInput label="CommentUpdatedAt" source="commentUpdatedAt" />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="tweet.id" reference="Tweet" label="tweet">
          <SelectInput optionText={TweetTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
