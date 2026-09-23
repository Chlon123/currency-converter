import { tryParseJson } from '../utils/try-parse-json';

import { ApiError } from './error';

export interface ApiRequestOptions extends RequestInit {
  token?: string;
}

export const apiFetch = async <T>(url: string, options: ApiRequestOptions = {}): Promise<T> => {
  const { token, headers, ...init } = options;

  const mergedHeaders = new Headers(headers);
  if (token) {
    mergedHeaders.set('authorization', `Bearer ${token}`);
  }

  const response = await fetch(url, {
    ...init,
    headers: mergedHeaders
  });

  if (!response.ok) {
    const payload = await tryParseJson(response);

    const message =
      response.status === 401
        ? 'Unauthorized'
        : response.status === 403
          ? 'Forbidden'
          : `Request failed with HTTP ${response.status}`;

    throw new ApiError(message, response.status, payload);
  }

  const payload = await tryParseJson(response);

  return payload as T;
};

export const apiClient = {
  request: apiFetch
};
