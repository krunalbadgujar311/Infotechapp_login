import React, { useMemo } from 'react'
import {useTable,useSortBy,useGlobalFilter,useFilters,usePagination} from 'react-table'
import GlobalFilter from './GlobalFilter'
import MOCK_DATA from './Mock_Data.json'
import {COLUMNS,GROUPED_COLUMNS} from './Columns'
import './Navbar.css'

export const PaginationTable = () => {
  
const columns=useMemo(()=>COLUMNS,[])
  const data =useMemo(()=>MOCK_DATA,[])
  
  const tableInstance = useTable({
    columns,
    data,
    //initialState:{pageIndex:0,pageSize:9}
  },
  useFilters,useGlobalFilter,useSortBy,usePagination)

  const {
    getTableProps, 
    getTableBodyProps,
    headerGroups,
    /*page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,*/
    rows,
    prepareRow,
    state,
    setGlobalFilter
}=tableInstance
    const {globalFilter}=state

//const {pageIndex,pageSize}=state
  return (
    
    <div className="Outer">
    <div className="Inner">
    {/*<div className="PaginationBut">
        <span>
            Page{' '}
            <strong>
                {pageIndex+1} of {pageOptions.length}
            </strong>{' '}
        </span>
        <span>
            |Go to page:{' '}
            <input type='number' defaultValue={pageIndex+1}
            onChange={e=>{
                const pageNumber=e.target.value ? Number(e.target.value)-1:0
                gotoPage(pageNumber);
            }}
            style={{width:'50px'}}/>|
        </span>
        <select value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
            {[1,2,3,4,5,6,7,8,9,10,25,50].map((pageSize)=>(
                <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                </option>
            ))}
        </select>
        <button onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
    </div>*/}
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup)=>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column)=>(
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.render('Header')}
                            <div>
                            {column.canFilter ? column.render('Filter') : null}
                            </div>
                            <span>
                                {column.isSorted ? (column.isSortedDesc ? '⬇️' : '⬆️') : ''}
                            </span>
                        </th>
                    ))}
                </tr>
            ))}
            
        </thead>
        
        <tbody {...getTableBodyProps()}>
            {
                //page.map(row=>{
                    rows.map(row=>{
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map((cell)=>{
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })
            }
            
        </tbody>
    </table>
    </div>
    </div>
  )
}

export default PaginationTable
