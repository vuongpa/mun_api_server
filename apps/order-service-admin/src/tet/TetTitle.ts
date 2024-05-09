import { Tet as TTet } from "../api/tet/Tet";

export const TET_TITLE_FIELD = "id";

export const TetTitle = (record: TTet): string => {
  return record.id?.toString() || String(record.id);
};
