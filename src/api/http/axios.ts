import axios from 'axios';

const token =
  'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJVNGdNaUZWMXFMYm1XMWUyRGtfcFFlT1BWaWFhaFdFdUZWZC1NbTMzM2ZJIn0.eyJleHAiOjE3MTM5NzI2NjksImlhdCI6MTcxMzkzNjc1MywiYXV0aF90aW1lIjoxNzEzOTM2NjY5LCJqdGkiOiI2MTk5YTA1My00ZTEzLTQ3ZDUtYmQ3OS1mOTE3OGM0ODkzYmYiLCJpc3MiOiJodHRwOi8vZGplbXNvbHV0aW9ucy5jb206MTIwMTYvYXV0aC9yZWFsbXMvRGplbXMiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOGZiMmY1YjQtYzg4Mi00ZDZlLTkxNzItM2U0MjhiODExZWY4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZGplbS1mcm9udGVuZCIsIm5vbmNlIjoiNGJhMjViMjctZDA5Ny00YTJjLWIzMzgtMTQ5ZjY0NTU2MjNhIiwic2Vzc2lvbl9zdGF0ZSI6IjI3NTA4YzVlLTE2Y2QtNDdiNi1hNzc5LTQxNDZiNTU5ODAxYSIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL3d3dy5kamVtc29sdXRpb25zLmNvbToxMjAyOCIsImh0dHA6Ly9kamVtc29sdXRpb25zLmNvbToxMjAxMiIsImh0dHA6Ly9kamVtc29sdXRpb25zLmNvbToxMjAyMSIsImh0dHA6Ly9sb2NhbGhvc3QiLCJodHRwOi8vd3d3LmRqZW1zb2x1dGlvbnMuY29tOjEyMDIxIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAwIiwiaHR0cDovL3d3dy5kamVtc29sdXRpb25zLmNvbToxMjAxMiIsImh0dHA6Ly9sb2NhbGhvc3Q6MzIyMjIiLCJodHRwOi8vZGplbXNvbHV0aW9ucy5jb206MTIwMjgiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLWRqZW0iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiMjc1MDhjNWUtMTZjZC00N2I2LWE3NzktNDE0NmI1NTk4MDFhIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1MSIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiIsImVtYWlsIjoidTFAZ21haWwuY29tIn0.mVx_MxmGwazH9LBzw2WUPZ93zzYOj6reNz0Sn4_VBhXjsp1oOh-URWwJRXxd98-1MgnmLyn--rZmkj4EiPmJXrWzrGaKmejwNwiCtPmpqoLRtNJwm8Mj-_HdwbWuQsEf8LDhwl1rq3wT0YMFsvk69I5UmCxwAjY37TISNY0k6hLZx8BCx8qOREa1EaYU8mVjtzKTJXstzI6dUL5h9T0Ab8TrJJTLyeyMXL5FdThA-IWEVVkUYEWWIE2fwUacTganqBZBB1sEFqzcBqqQX07lq2KiDpnLfMweBWIAdQC-QHBp4YuI5gmcT445bU_cUcTEqyWKCXUzW_FwJ-Wj4ortAw';

export const axiosInstance = axios.create({
  // baseURL: 'http://localhost:3000/',
  // baseURL: 'http://www.djemsolutions.com:12010',
  headers: {
    Authorization: `${token}`,
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    // Если запрос выполнен успешно, просто передаем ответ дальше

    return response;
  },
  (error) => {
    // Если произошла ошибка, проверяем её код
    if (error.response && error.response.status === 401) {
      // Обработка ошибки 401 (неавторизованный запрос)
      console.error('Ошибка 401: Неавторизованный запрос');
      // Вы можете сделать что-то специфичное для этой ошибки, например, перенаправить пользователя на страницу входа
      // window.location.href = '/login';
    }
    // Если ошибка не 401, просто передаем её дальше
    return Promise.reject(error);
  }
);
