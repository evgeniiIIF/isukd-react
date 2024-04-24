import { AxiosResponse } from 'axios';
import { axiosInstance } from './axios';

export interface DictionaryList {
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  items: DictionaryListItem[];
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface DictionaryListItem {
  dictionaryTitle: string;
  dictionaryId: number;
}

const BASE_URL = '/api/v1/Dictionaries/all';

export class DictionaryListHttp {
  static async getAll(): Promise<AxiosResponse<DictionaryList>> {
    // static async getAll(pageIndex = 1, pageSize = 5): Promise<AxiosResponse<DictionaryList>> {
    const response: AxiosResponse<any> = await axiosInstance.get(`${BASE_URL}`, {
      // params: {
      //   pageIndex,
      //   pageSize,
      // },
    });

    return response;
  }
}
