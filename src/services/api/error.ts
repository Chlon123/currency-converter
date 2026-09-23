export class ApiError extends Error {
  public readonly status: number;
  public readonly payload: unknown;

  constructor (message: string, status: number, payload: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.payload = payload;
  }
}
