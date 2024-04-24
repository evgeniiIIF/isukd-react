/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_PaginationState,
} from 'material-react-table';
// import { DictionaryItemPageItem } from '../../api/http/DictionaryItemPageHttp';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
// import { selectDictionaryItemPage } from '../../store/Dictionary/reducer';
import { Link, useParams } from 'react-router-dom';
import { selectDictionaryItemPage } from '../../store/DictionaryItemPage/reducer';

export interface IDictionaryItemPageProps {}

export const DictionaryItemPage: FC = () => {
  const { dictionaryId } = useParams();
  const { items, fields, isLoading, error } = useAppSelector(selectDictionaryItemPage);
  console.log(items, fields);

  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { getDictionaryItemPage, getDictionaryItemPageItems } = useActions();
  useEffect(() => {
    getDictionaryItemPage(dictionaryId);
    getDictionaryItemPageItems(dictionaryId);
  }, []);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      ...fields
        .filter((item) => {
          return !item.hidden;
        })
        .map((item) => {
          return {
            accessorKey: item.internalName,
            header: item.title,
            Cell: ({ renderedCellValue, row }: any) => (
              <Link key={item.title} to={`/profile/${row.original.dictionaryId}`}>
                {renderedCellValue}
              </Link>
            ),
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
    rowCount: 20,

    onPaginationChange: setPagination,
  });

  if (error) {
    return <h1>{error}</h1>;
  }
  if (isLoading) {
    return <h1>...Loading</h1>;
  }

  return <MaterialReactTable table={table} />;
  // return <h1> `DictionaryItemPage {dictionaryId}` </h1>;
};
