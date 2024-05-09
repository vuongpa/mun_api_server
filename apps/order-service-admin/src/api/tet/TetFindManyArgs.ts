import { TetWhereInput } from "./TetWhereInput";
import { TetOrderByInput } from "./TetOrderByInput";

export type TetFindManyArgs = {
  where?: TetWhereInput;
  orderBy?: Array<TetOrderByInput>;
  skip?: number;
  take?: number;
};
