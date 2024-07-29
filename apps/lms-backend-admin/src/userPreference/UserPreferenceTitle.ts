import { UserPreference as TUserPreference } from "../api/userPreference/UserPreference";

export const USERPREFERENCE_TITLE_FIELD = "userId";

export const UserPreferenceTitle = (record: TUserPreference): string => {
  return record.userId?.toString() || String(record.id);
};
