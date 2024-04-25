import { AppDispatch } from '..';
import { DictionaryItemPageHttp } from '../../api/http/DictionaryItemPageHttp';
// import { DictionaryAllHttp } from '../../api/http/DictionaryAllHttp';
import { setItems, setFields, setError, setIsLoading, setMeta } from './reducer';

export const getDictionaryItemPage = (dictionaryId: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      const response = await DictionaryItemPageHttp.getDictionaryItemPage(dictionaryId);

      dispatch(setFields(response.data.fields));
    } catch (err: any) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};

export const getDictionaryItemPageItems = (dictionaryId: any, pageIndex: number, pageSize: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      const response = await DictionaryItemPageHttp.getDictionaryItemPageItems(dictionaryId, pageIndex, pageSize);

      const { items, ...meta } = response.data;
      dispatch(setItems(items));
      dispatch(setMeta(meta));
    } catch (err: any) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};
