import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserPreferenceWhereInput = {
  id?: StringFilter;
  theme?: "Option1";
  userId?: StringNullableFilter;
};
