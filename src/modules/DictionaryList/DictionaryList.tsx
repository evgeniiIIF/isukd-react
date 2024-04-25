/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_PaginationState,
} from 'material-react-table';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectDictionaryAll } from '../../store/DictionaryAll/reducer';
import { Link } from 'react-router-dom';
import { DictionaryAllItem } from '../../api/http/DictionaryAllHttp';

export interface IDictionaryAllProps {}

export const DictionaryAll: FC = () => {
  const { dictionaryListItems, isLoading, error, meta } = useAppSelector(selectDictionaryAll);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { getDictionaryAll } = useActions();
  useEffect(() => {
    getDictionaryAll(pagination.pageIndex + 1, pagination.pageSize);
  }, [pagination.pageIndex, pagination.pageSize]);

  const columns = useMemo<MRT_ColumnDef<DictionaryAllItem>[]>(
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
