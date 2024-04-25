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
import { Link, useParams } from 'react-router-dom';
import { selectDictionaryItemPage } from '../../store/DictionaryItemPage/reducer';

export interface IDictionaryItemPageProps {}

export const DictionaryItemPage: FC = () => {
  const { dictionaryId } = useParams();
  const { items, fields, isLoading, error, meta } = useAppSelector(selectDictionaryItemPage);

  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 2,
  });

  const { getDictionaryItemPage, getDictionaryItemPageItems } = useActions();
  useEffect(() => {
    getDictionaryItemPage(dictionaryId);
    getDictionaryItemPageItems(dictionaryId, pagination.pageIndex + 1, pagination.pageSize);
  }, [pagination.pageIndex, pagination.pageSize]);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      ...fields
        .filter((item) => {
          return !item.hidden;
        })
        .map((item, index) => {
          return {
            accessorKey: item.internalName,
            header: item.title,
            Cell: ({ renderedCellValue, row }: any) => {
              return index === 0 ? (
                <Link key={item.title} to={`/profile/${row.original.dictionaryId}`}>
                  {renderedCellValue}
                </Link>
              ) : (
                renderedCellValue
              );
            },
          };
        }),
    ],
    [fields]
  );

  const data = useMemo<any>(
    () => [
      ...items.map((item) => {
        return item.fields;
      }),
    ],
    [items]
  );

  const table = useMaterialReactTable({
    columns,
    data: data,
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,
    enableColumnActions: false,
    state: {
      isLoading,
      pagination,
    },
    muiPaginationProps: {
      rowsPerPageOptions: [2, 3, 10],
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
  if (isLoading) {
    return <h1>...Loading</h1>;
  }

  return <MaterialReactTable table={table} />;
};
