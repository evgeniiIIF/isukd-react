import { AppDispatch } from '..';
import { DictionaryListHttp } from '../../api/http/DictionaryListHttp';
import { setMeta, setDictionaryListItems, setError, setIsLoading } from './reducer';

export const getDictionaryList = (pageIndex: number, pageSize: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      const response = await DictionaryListHttp.getAll(pageIndex, pageSize);
      const { items, ...meta } = response.data;
      dispatch(setDictionaryListItems(items));
      dispatch(setMeta(meta));
    } catch (err: any) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};
