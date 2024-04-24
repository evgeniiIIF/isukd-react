import { AppDispatch } from '..';
import { DictionaryListHttp } from '../../api/http/DictionaryListHttp';
import { setDictionaryItems, setError, setIsLoading } from './reducer';

// export const getDictionaryList = (pageIndex: number, pageSize: number) => {
export const getDictionaryList = (pageIndex: number, pageSize: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      const posts = await DictionaryListHttp.getAll();
      dispatch(setDictionaryItems(posts.data.items));
    } catch (err: any) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};
