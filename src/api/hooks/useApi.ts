import { useState, useCallback } from 'react';
import { ApiResponse, ErrorResponse } from '../types';

interface UseApiOptions {
  onSuccess?: (data: unknown) => void;
  onError?: (error: ErrorResponse) => void;
}

export function useApi<T>(options: UseApiOptions = {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(async (promise: Promise<ApiResponse<T>>) => {
    try {
      setLoading(true);
      setError(null);
      const response = await promise;
      setData(response.data);
      options.onSuccess?.(response.data);
      return response.data;
    } catch (err) {
      const errorResponse = err as ErrorResponse;
      setError(errorResponse);
      options.onError?.(errorResponse);
      throw errorResponse;
    } finally {
      setLoading(false);
    }
  }, [options]);

  return {
    loading,
    error,
    data,
    execute,
  };
}