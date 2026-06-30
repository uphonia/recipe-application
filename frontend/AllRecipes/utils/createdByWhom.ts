export const createdByWhom = (createdBy: string, currentUserId?: string) =>
  createdBy === currentUserId ? "You" : "Other";
