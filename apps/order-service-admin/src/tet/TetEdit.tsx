import * as React from "react";
import { Edit, SimpleForm, EditProps, BooleanInput } from "react-admin";

export const TetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="hieu_dan" source="hieuDan" />
      </SimpleForm>
    </Edit>
  );
};
