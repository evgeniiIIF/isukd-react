import { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectDictionaryList } from '../../store/Dictionary/reducer';
import { useActions } from '../../hooks/useActions';
import { DictionaryListItem } from '../../api/http/DictionaryListHttp';

//BasicTable data type
type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska',
  },
];

const BasicTable = () => {
  //should be memoized or stable

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 2, //customize the default page size
  });

  const { dictionaryListItems, isLoading, error } = useAppSelector(selectDictionaryList);

  const { getDictionaryList } = useActions();

  useEffect(() => {
    getDictionaryList();
  }, []);

  console.log(dictionaryListItems);

  const columns = useMemo<MRT_ColumnDef<DictionaryListItem>[]>(
    () => [
      {
        accessorKey: 'dictionaryTitle',
        header: 'Наименование',
        size: 150,
        enableSorting: true,
        enableColumnActions: false,
      },
    ],
    []
  );

  // const data = useMemo(() => dictionaryListItems, [dictionaryListItems]);
  const [data, setData] = useState([
    { dictionaryTitle: 'Title1', dictionaryId: 1 },
    { dictionaryTitle: 'Title2', dictionaryId: 2 },
    { dictionaryTitle: 'Title3', dictionaryId: 3 },
  ]);

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    // manualPagination: true,
    rowCount: 50,
    paginationDisplayMode: 'pages',
    muiPaginationProps: {
      rowsPerPageOptions: [2, 3, 10, 20],
      showFirstButton: false,
      showLastButton: false,
      color: 'primary',
      shape: 'rounded',
      variant: 'outlined',
    },

    state: { pagination },
    onPaginationChange: setPagination,
  });

  return <MaterialReactTable table={table} />;
};

export default BasicTable;

// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { useAppSelector } from '../../hooks/useAppSelector';
// import { selectDictionaryList } from '../../store/Dictionary/reducer';
// import { useActions } from '../../hooks/useActions';

// export default function BasicTable() {
//   const { dictionaryListItems, isLoading, error } = useAppSelector(selectDictionaryList);

//   const { getDictionaryList } = useActions();

//   React.useEffect(() => {
//     getDictionaryList();
//   }, []);
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label='simple table'>
//         <TableHead>
//           <TableRow>
//             <TableCell>Наименование</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {dictionaryListItems.map((row: any) => (
//             <TableRow key={row.dictionaryTitle} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//               <TableCell component='th' scope='row'>
//                 {row.dictionaryTitle}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
