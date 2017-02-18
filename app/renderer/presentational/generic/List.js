import React from 'react'

const List = ({ children, rootClass }) => {
  return (
    <ul className={'mdl-list ' + rootClass}>
      { children }
    </ul>
  )
}

export default List
