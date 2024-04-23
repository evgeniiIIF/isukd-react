import { AppDispatch } from '..';
import { DictionaryListHttp } from '../../api/http/DictionaryListHttp';
import { setDictionaryItems, setError, setIsLoading } from './reducer';

export const getDictionaryList = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      const posts = await DictionaryListHttp.getAll();
      dispatch(setDictionaryItems(posts.data.items));
      console.log('try DDDDD');
    } catch (err: any) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setIsLoading(false));
      console.log('fina DDDD');
    }
  };
};
