import { ApiError } from "../api/error";

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof ApiError) return error.message;
  if (error instanceof Error) return error.message;

  return 'Unknown error';
};
