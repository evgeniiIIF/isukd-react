/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_PaginationState,
} from 'material-react-table';
import { DictionaryListItem } from '../../api/http/DictionaryListHttp';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectDictionaryList } from '../../store/DictionaryList/reducer';
import { Link } from 'react-router-dom';

export interface IDictionaryListProps {}

export const DictionaryList: FC = () => {
  const { dictionaryListItems, isLoading, error, meta } = useAppSelector(selectDictionaryList);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { getDictionaryList } = useActions();
  useEffect(() => {
    getDictionaryList(pagination.pageIndex + 1, pagination.pageSize);
  }, [pagination.pageIndex, pagination.pageSize]);

  const columns = useMemo<MRT_ColumnDef<DictionaryListItem>[]>(
    () => [
      {
        accessorKey: 'dictionaryTitle',
        header: 'Наименование',
        Cell: ({ renderedCellValue, row }) => <Link to={`${row.original.dictionaryId}`}>{renderedCellValue}</Link>,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: dictionaryListItems,
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,
    enableColumnActions: false,
    state: {
      isLoading,
      pagination,
    },
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 20],
      showFirstButton: false,
      showLastButton: false,
    },
    paginationDisplayMode: 'pages',
    rowCount: meta.totalCount,

    onPaginationChange: setPagination,
  });

  if (error) {
    return <h1>{error}</h1>;
  }

  return <MaterialReactTable table={table} />;
};
