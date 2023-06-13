import React, { useMemo } from 'react'
import {useTable,useSortBy,useGlobalFilter,useFilters} from 'react-table'
import GlobalFilter from './GlobalFilter'
import MOCK_DATA from './Mock_Data.json'
import {COLUMNS,GROUPED_COLUMNS} from './Columns'
import './Navbar.css'

export const SortingTable = () => {
  
const columns=useMemo(()=>COLUMNS,[])
  const data =useMemo(()=>MOCK_DATA,[])
  
  const tableInstance = useTable({
    columns,
    data
  },
  useFilters,useGlobalFilter,useSortBy)

  const {
    getTableProps, 
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
}=tableInstance
    const {globalFilter}=state
  return (
    
    <div className="Outer">
    <div className="Inner">
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
        <tfoot>
            {
                footerGroups.map(footerGroup =>(
                    <tr {...footerGroup.getFooterGroupProps()}>
                        {footerGroup.headers.map((column)=>(
                            <td {...column.getFooterProps}>{column.render('Footer')}</td>
                        ))}

                    </tr>
                ))
            }
        </tfoot>
    </table>
    </div>
    </div>
  )
}

export default SortingTable
