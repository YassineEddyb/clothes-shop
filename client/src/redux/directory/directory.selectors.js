import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorySectcions = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
