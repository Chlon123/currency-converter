import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { apiFetch } from './client';

describe('apiFetch', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  it('should successfully fetch and parse JSON', async () => {
    const mockResponse = { id: 1, name: 'Test' };
    vi.mocked(global.fetch).mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: vi.fn().mockResolvedValue(mockResponse)
    } as unknown as Response);

    const result = await apiFetch('/test-url');
    expect(result).toEqual(mockResponse);
    expect(global.fetch).toHaveBeenCalledWith('/test-url', expect.any(Object));
  });
});
