import { bindActionCreators } from '@reduxjs/toolkit';
import { getPosts } from '../store/actions/posts.actions';
import { useAppDispatch } from './useAppDispatch';
import { getDictionaryList } from '../store/DictionaryList/actions';
import { getDictionaryItemPage } from '../store/DictionaryItemPage/actions';

const createActions = {
  getPosts,
  getDictionaryList,
  getDictionaryItemPage,
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(createActions, dispatch);
};
