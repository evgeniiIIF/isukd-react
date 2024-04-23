import { bindActionCreators } from '@reduxjs/toolkit';
import { getPosts } from '../store/actions/posts.actions';
import { useAppDispatch } from './useAppDispatch';
import { getDictionaryList } from '../store/Dictionary/actions';

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators({ getPosts, getDictionaryList }, dispatch);
};
