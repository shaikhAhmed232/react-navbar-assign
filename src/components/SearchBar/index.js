import React from 'react'
import './style.css'
const SearchBar = () => {
    const [inputVal, setInputVal] = React.useState('')
    const onChangeHandler = (e) => {
        setInputVal(e.target.value)
    }
  return (
    <div className='search'>
        <input type="text" placeholder='Search' value={inputVal} onChange={onChangeHandler} />
        <button>submit</button>
    </div>
  )
}

export default SearchBar