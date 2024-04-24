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
  static async getAll(pageIndex: number, pageSize: number): Promise<AxiosResponse<DictionaryList>> {
    const response: AxiosResponse<DictionaryList> = await axiosInstance.get(`${BASE_URL}`, {
      params: {
        pageIndex,
        pageSize,
      },
    });

    return response;
  }
}
