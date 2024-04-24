import { FC, useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectPosts } from '../../store/postReducer';
import { selectDictionaryList } from '../../store/Dictionary/reducer';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import BasicTable from './table';

export interface IDictionaryListProps {}

export const DictionaryList: FC = (props: IDictionaryListProps) => {
  return (
    <div>
      <BasicTable />
    </div>
  );
};
