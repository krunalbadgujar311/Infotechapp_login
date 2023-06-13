import React,{useState} from 'react'
import { useAsyncDebounce } from 'react-table'
import './Navbar.css'
const GlobalFilter = ({filter,setFilter}) => {
  const [value,setValue] = useState(filter)

  const onChange=useAsyncDebounce(value=>{
    setFilter(value || undefined)
  },100)
  return (

        <div className="outer-search">
            Search: {''}
            <input value={value || ''}
            placeholder='Search'
            onChange={(e)=>{
                setValue(e.target.value)
                onChange(e.target.value)
                }}/>
        </div>
  
  )
}

export default GlobalFilter
