import axios from 'axios';

const token =
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJVNGdNaUZWMXFMYm1XMWUyRGtfcFFlT1BWaWFhaFdFdUZWZC1NbTMzM2ZJIn0.eyJleHAiOjE3MTM4OTQzMzMsImlhdCI6MTcxMzg1ODM1NywiYXV0aF90aW1lIjoxNzEzODU4MzMzLCJqdGkiOiJiOGEzNzNjOC1jYzdlLTQzZjQtYTAyYi1kNzAzMTNiODQzYmEiLCJpc3MiOiJodHRwOi8vZGplbXNvbHV0aW9ucy5jb206MTIwMTYvYXV0aC9yZWFsbXMvRGplbXMiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOGZiMmY1YjQtYzg4Mi00ZDZlLTkxNzItM2U0MjhiODExZWY4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZGplbS1mcm9udGVuZCIsIm5vbmNlIjoiNzRmNjYwOTUtZWFhYi00MWVhLWFkZmQtNmM1NTk3MGFjZmVjIiwic2Vzc2lvbl9zdGF0ZSI6Ijk1YmU0OTFmLWYzNWUtNGQ4My04YWZkLTU1ZmM2MjNmZDQ5NyIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL3d3dy5kamVtc29sdXRpb25zLmNvbToxMjAyOCIsImh0dHA6Ly9kamVtc29sdXRpb25zLmNvbToxMjAxMiIsImh0dHA6Ly9kamVtc29sdXRpb25zLmNvbToxMjAyMSIsImh0dHA6Ly9sb2NhbGhvc3QiLCJodHRwOi8vd3d3LmRqZW1zb2x1dGlvbnMuY29tOjEyMDIxIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAwIiwiaHR0cDovL3d3dy5kamVtc29sdXRpb25zLmNvbToxMjAxMiIsImh0dHA6Ly9sb2NhbGhvc3Q6MzIyMjIiLCJodHRwOi8vZGplbXNvbHV0aW9ucy5jb206MTIwMjgiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLWRqZW0iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiOTViZTQ5MWYtZjM1ZS00ZDgzLThhZmQtNTVmYzYyM2ZkNDk3IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1MSIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiIsImVtYWlsIjoidTFAZ21haWwuY29tIn0.dJmtrcAf1IVgXfTmrHhNnt25X7gRghdVrOktCoBCBYZAF0RleSTPvM6NUkR_0gk-pZaeBnPW3JRW0mcEVnnsYmY9obmKWy_DKBvCoBbZNtKmLhJDfvLgo59tKV9R3iKtFn5Wlzgh80MGidy6f9yytkj0ibp1jL4myhabo1blpqJRbNLDpBVEkCha_pCV2wZCVOAI3rzc8j4Ho2SqRXtEVsUSWdFGZWef7JPk-IloaDdvn3XUvPfqlHbseL_MWmSzTj-iYryeaB4-gPA-qmcRrrFYUDFC91hVrcSkgW-o7RoLtANdAXYIt1pDJX-BE1V8AbiNs39zZD6pwFkpoa4uyg';

export const axiosInstance = axios.create({
  // baseURL: 'http://localhost:3000/',
  // baseURL: 'http://www.djemsolutions.com:12010',
  headers: {
    Authorization: `Bearer ${token}`,
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
