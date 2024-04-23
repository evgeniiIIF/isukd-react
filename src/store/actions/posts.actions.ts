import { AppDispatch, RootState } from '..';
import { PostsHttp } from '../../api/http/PostsHttp';
import { setError, setIsLoading, setPosts } from '../postReducer';

export interface PostsAction {
  type: string;
  payload: any;
}

export const getPosts = () => {
  // return async (dispatch: Dispatch<PostsAction>, getState: () => RootState) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      const posts = await PostsHttp.getAll();
      dispatch(setPosts(posts.data));
      console.log('try');
    } catch (err: any) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setIsLoading(false));
      console.log('fina');
    }
  };
};
