import { apiClient, type ApiRequestOptions } from "../api/client";

export const request = async <T>(url: string, options: ApiRequestOptions = {}): Promise<T> => {
  return apiClient.request<T>(url, options);
};
