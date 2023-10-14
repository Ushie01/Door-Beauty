import { useMemo } from "react";
import { useTable, Column, CellProps, usePagination, Row } from "react-table";
import { useState } from "react";
import Viewtab from "./viewtab";
import Headerdash from "./headerdash";
import Navbar from "./navbar";
import data from './MOCK_DATA.json'

interface TabViewRows {
  [key: string]: boolean;
}

interface MyData {
  serial_number: number;
  full_name: string;
  email: string;
  contact: string;
  date: string;
  status: string;
  action: string;
}


const Home = () => {
  const [tabViewRows, setTabViewRows] = useState<TabViewRows>({});


  const toggleTabView = (row: { id: string | number; }) => {
    setTabViewRows((prevState) => ({
      ...prevState,
      [row.id]: !prevState[row.id],
    }));
  };


  

  const columns: Column<MyData>[] = useMemo(
    () => [
      {
        Header: 'S/N',
        accessor: 'serial_number',
      },
      {
        Header: 'Name',
        accessor: 'full_name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Contact',
        accessor: 'contact',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Action',
        accessor: 'action', // You can use 'status' as the accessor, or any other valid accessor in MyData
        Cell: ({ row }: { row: Row<MyData> }) => (
          <button onClick={() => toggleTabView(row)}>Action</button>
        ),
      },
    ],
    []
  );
  

  
  const options = {
    myPageOptions: [10, 50, 100],
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
   //@ts-ignore 
    page,
    //@ts-ignore 
    nextPage,
    //@ts-ignore 
    previousPage,
    //@ts-ignore 
    canNextPage,
    //@ts-ignore 
    canPreviousPage,
    //@ts-ignore 
    pageOptions,
    state,
    prepareRow,
  } = useTable({ columns, data: data as MyData[] }, usePagination);

  //@ts-ignore 
  const { pageIndex } = state;

  return (
    <div className="bg-gray-50">
      <Headerdash />
      <Navbar />
      
      <div className="pl-72 pt-32 w-[90rem] ">
        <table
          className=" bg-gray-100 h-[31rem] "
          {...getTableProps()}
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead className="bg-orange-400 text-white ">
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                style={{ borderBottom: "1px solid #ccc" }}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{ padding: "8px", textAlign: "left" }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-orange-50" {...getTableBodyProps()}>
            {page.map((row: any) => {
              prepareRow(row);
              return (
                <tr className="relative"
                  {...row.getRowProps()}
                  style={{ borderBottom: "1px solid #ccc" }}
                >
                  {row.cells.map((cell: any) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{ padding: "8px", textAlign: "left" }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                  {tabViewRows[row.id] && <td className="w-4 absolute top-5 right-8" colSpan={columns.length}><Viewtab rowId ={row.original.serial_number} /></td>}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mt-4 flex space-x-2">
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <div className="flex space-x-2" >
            <button
              className="bg-gray-600 p-[0.1rem] w-24 rounded-lg text-white "
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Previous
            </button>
            <button
              className="bg-gray-600 p-[0.1rem] w-24 rounded-lg text-white "
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
