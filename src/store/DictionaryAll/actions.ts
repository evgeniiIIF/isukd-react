import { AppDispatch } from '..';
import { DictionaryAllHttp } from '../../api/http/DictionaryAllHttp';
import { setMeta, setDictionaryAllItems, setError, setIsLoading } from './reducer';

export const getDictionaryAll = (pageIndex: number, pageSize: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      const response = await DictionaryAllHttp.getAll(pageIndex, pageSize);
      const { items, ...meta } = response.data;
      dispatch(setDictionaryAllItems(items));
      dispatch(setMeta(meta));
    } catch (err: any) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};
