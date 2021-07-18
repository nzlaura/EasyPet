import React, { useState } from 'react'

function SearchBar (props) {
  const [search, setSearch] = useState({
    searchString: ''
  })

  function handleChange (e) {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    props.history.push('/faq/search/' + search.searchString)
    setSearch({
      searchString: ''
    })
  }

  return (
    <>
      <form className="relative" id='search' onSubmit={handleSubmit}>
        <input type='text' className="h-8 w-96 pr-8 pl-5 rounded-md z-0 focus:shadow focus:outline-none text-sm" id='searchString' name='searchString' placeholder='Search...'
          value={search.searchString} onChange={handleChange}/>
        <br></br>
      </form>
    </>
  )
}

export default SearchBar
