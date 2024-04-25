import { bindActionCreators } from '@reduxjs/toolkit';
import { useAppDispatch } from './useAppDispatch';
import { getDictionaryAll } from '../store/DictionaryAll/actions';
import { getDictionaryItemPage, getDictionaryItemPageItems } from '../store/DictionaryItemPage/actions';

const createActions = {
  getDictionaryAll,
  getDictionaryItemPage,
  getDictionaryItemPageItems,
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(createActions, dispatch);
};
