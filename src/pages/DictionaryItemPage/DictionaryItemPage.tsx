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

export interface IDictionaryItemPageProps {}

export const DictionaryItemPage: FC = () => {
  const { dictionaryId } = useParams();
  // const { DictionaryItemPageItems, isLoading, error, meta } = useAppSelector(selectDictionaryItemPage);

  // const [pagination, setPagination] = useState<MRT_PaginationState>({
  //   pageIndex: 0,
  //   pageSize: 10,
  // });

  // const { getDictionaryItemPage } = useActions();

  // useEffect(() => {
  //   getDictionaryItemPage(pagination.pageIndex + 1, pagination.pageSize);
  // }, [pagination.pageIndex, pagination.pageSize]);

  // const columns = useMemo<MRT_ColumnDef<any>[]>(
  //   () => [
  //     {
  //       accessorKey: 'dictionaryTitle',
  //       header: 'Наименование',
  //       Cell: ({ renderedCellValue, row }) => (
  //         <Link to={`/profile/${row.original.dictionaryId}`}>{renderedCellValue}</Link>
  //       ),
  //     },
  //   ],
  //   []
  // );

  // const table = useMaterialReactTable({
  //   columns,
  //   data: DictionaryItemPageItems,
  //   manualFiltering: true,
  //   manualPagination: true,
  //   manualSorting: true,
  //   enableColumnActions: false,
  //   state: {
  //     isLoading,
  //     pagination,
  //   },
  //   muiPaginationProps: {
  //     rowsPerPageOptions: [5, 10, 20],
  //     showFirstButton: false,
  //     showLastButton: false,
  //   },
  //   paginationDisplayMode: 'pages',
  //   rowCount: meta.totalCount,

  //   onPaginationChange: setPagination,
  // });

  // if (error) {
  //   return <h1>{error}</h1>;
  // }

  // return <MaterialReactTable table={table} />;
  return <h1> `DictionaryItemPage {dictionaryId}` </h1>;
};
