import { AxiosResponse } from 'axios';
import { axiosInstance } from './axios';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export class PostsHttp {
  static async getAll(limit = 3, page = 1): Promise<AxiosResponse<Post[]>> {
    const response: AxiosResponse<any> = await axiosInstance.get(`${BASE_URL}`, {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response;
  }
}
