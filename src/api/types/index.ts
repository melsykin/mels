// API Response Types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface ErrorResponse {
  error: string;
  status: number;
  details?: unknown;
}