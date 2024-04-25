import { bindActionCreators } from '@reduxjs/toolkit';
import { useAppDispatch } from './useAppDispatch';
import { getDictionaryList } from '../store/DictionaryList/actions';
import { getDictionaryItemPage, getDictionaryItemPageItems } from '../store/DictionaryItemPage/actions';

const createActions = {
  getDictionaryList,
  getDictionaryItemPage,
  getDictionaryItemPageItems,
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(createActions, dispatch);
};
