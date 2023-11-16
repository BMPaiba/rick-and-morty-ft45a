import React from 'react'
import SearchBar from './SearchBar.jsx';
import {Link, NavLink} from 'react-router-dom'

export default function Nav({onSearch}) {
  return (
    <div>
      <NavLink to='/about'>
      <button >About</button>
      </NavLink>
      <NavLink to='/home'>
      <button >Home</button>
      </NavLink>
      <hr />
      <SearchBar onSearch={onSearch} />
      <hr />
    </div>
  )
}
