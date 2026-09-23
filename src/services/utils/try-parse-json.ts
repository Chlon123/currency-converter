export const tryParseJson = async (response: Response): Promise<unknown> => {
  const contentType = response.headers.get('content-type') ?? '';

  if (!contentType.toLowerCase().includes('application/json')) {
    return await response.text();
  }

  try {
    return (await response.json()) as unknown;
  } catch {
    return await response.text();
  }
};
