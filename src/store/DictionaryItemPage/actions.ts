import { AppDispatch } from '..';
import { DictionaryItemPageHttp } from '../../api/http/DictionaryItemPageHttp';
// import { DictionaryListHttp } from '../../api/http/DictionaryListHttp';
import { setItems, setFields, setError, setIsLoading } from './reducer';

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

export const getDictionaryItemPageItems = (dictionaryId: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      const response = await DictionaryItemPageHttp.getDictionaryItemPageItems(dictionaryId);
      console.log(response, 'itemssss');

      dispatch(setItems(response.data.items));
    } catch (err: any) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};
