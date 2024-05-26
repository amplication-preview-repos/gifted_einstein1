import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LikeTitle } from "../like/LikeTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput
          source="likes"
          reference="Like"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LikeTitle} />
        </ReferenceArrayInput>
        <TextInput label="password" source="password" />
        <div />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
