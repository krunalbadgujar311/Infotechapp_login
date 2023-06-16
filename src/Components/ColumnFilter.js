import React,{useState} from 'react'
import { useAsyncDebounce } from 'react-table'
import './Navbar.css'
const ColumnFilter = ({column}) => {
    const {filterValue,setFilter}=column
    const [value,setValue] = useState(filterValue)

    const onChange=useAsyncDebounce(value=>{
        setFilter(value || undefined)
      },100)
  return (
        <div className="col">
            <input 
                value={filterValue || ''}
                placeholder='Search Records....'
            onChange={(e) => {
                setValue(e.target.value)
                onChange(e.target.value)
                }}
            />
        </div>
  )
}

export default ColumnFilter;
