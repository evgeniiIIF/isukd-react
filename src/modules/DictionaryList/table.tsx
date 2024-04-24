import { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_ColumnFiltersState,
  type MRT_PaginationState,
  type MRT_SortingState,
} from 'material-react-table';
import { DictionaryListItem } from '../../api/http/DictionaryListHttp';

const Example = () => {
  //data and fetching state
  const [data, setData] = useState<DictionaryListItem[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  //table state
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  //if you want to avoid useEffect, look at the React Query example instead
  useEffect(() => {
    console.log(pagination);

    const fetchData = async () => {
      if (!data.length) {
        setIsLoading(true);
      } else {
        setIsRefetching(true);
      }

      const url = new URL('/api/v1/Dictionaries/all', 'http://localhost:3000');
      url.searchParams.set('pageIndex', `${pagination.pageIndex + 1}`);
      url.searchParams.set('pageSize', `${pagination.pageSize}`);

      try {
        const response = await fetch(url.toString(), {
          headers: {
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJVNGdNaUZWMXFMYm1XMWUyRGtfcFFlT1BWaWFhaFdFdUZWZC1NbTMzM2ZJIn0.eyJleHAiOjE3MTM5NzI2NjksImlhdCI6MTcxMzkzNjc1MywiYXV0aF90aW1lIjoxNzEzOTM2NjY5LCJqdGkiOiI2MTk5YTA1My00ZTEzLTQ3ZDUtYmQ3OS1mOTE3OGM0ODkzYmYiLCJpc3MiOiJodHRwOi8vZGplbXNvbHV0aW9ucy5jb206MTIwMTYvYXV0aC9yZWFsbXMvRGplbXMiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOGZiMmY1YjQtYzg4Mi00ZDZlLTkxNzItM2U0MjhiODExZWY4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZGplbS1mcm9udGVuZCIsIm5vbmNlIjoiNGJhMjViMjctZDA5Ny00YTJjLWIzMzgtMTQ5ZjY0NTU2MjNhIiwic2Vzc2lvbl9zdGF0ZSI6IjI3NTA4YzVlLTE2Y2QtNDdiNi1hNzc5LTQxNDZiNTU5ODAxYSIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL3d3dy5kamVtc29sdXRpb25zLmNvbToxMjAyOCIsImh0dHA6Ly9kamVtc29sdXRpb25zLmNvbToxMjAxMiIsImh0dHA6Ly9kamVtc29sdXRpb25zLmNvbToxMjAyMSIsImh0dHA6Ly9sb2NhbGhvc3QiLCJodHRwOi8vd3d3LmRqZW1zb2x1dGlvbnMuY29tOjEyMDIxIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAwIiwiaHR0cDovL3d3dy5kamVtc29sdXRpb25zLmNvbToxMjAxMiIsImh0dHA6Ly9sb2NhbGhvc3Q6MzIyMjIiLCJodHRwOi8vZGplbXNvbHV0aW9ucy5jb206MTIwMjgiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLWRqZW0iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiMjc1MDhjNWUtMTZjZC00N2I2LWE3NzktNDE0NmI1NTk4MDFhIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1MSIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiIsImVtYWlsIjoidTFAZ21haWwuY29tIn0.mVx_MxmGwazH9LBzw2WUPZ93zzYOj6reNz0Sn4_VBhXjsp1oOh-URWwJRXxd98-1MgnmLyn--rZmkj4EiPmJXrWzrGaKmejwNwiCtPmpqoLRtNJwm8Mj-_HdwbWuQsEf8LDhwl1rq3wT0YMFsvk69I5UmCxwAjY37TISNY0k6hLZx8BCx8qOREa1EaYU8mVjtzKTJXstzI6dUL5h9T0Ab8TrJJTLyeyMXL5FdThA-IWEVVkUYEWWIE2fwUacTganqBZBB1sEFqzcBqqQX07lq2KiDpnLfMweBWIAdQC-QHBp4YuI5gmcT445bU_cUcTEqyWKCXUzW_FwJ-Wj4ortAw`,
          },
        });
        const json = (await response.json()) as any;
        console.log(json);

        setData(json.items);
        setRowCount(json.totalCount);
      } catch (error) {
        setIsError(true);
        console.error(error);
        return;
      }
      setIsError(false);
      setIsLoading(false);
      setIsRefetching(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    columnFilters, //re-fetch when column filters change
    globalFilter, //re-fetch when global filter changes
    pagination.pageIndex, //re-fetch when page index changes
    pagination.pageSize, //re-fetch when page size changes
    sorting, //re-fetch when sorting changes
  ]);

  const columns = useMemo<MRT_ColumnDef<DictionaryListItem>[]>(
    () => [
      {
        accessorKey: 'dictionaryTitle',
        header: 'First Name',
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,

    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    rowCount,
    paginationDisplayMode: 'pages',
    state: {
      columnFilters,
      globalFilter,
      isLoading,
      pagination,
      showAlertBanner: isError,
      showProgressBars: isRefetching,
      sorting,
    },
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
