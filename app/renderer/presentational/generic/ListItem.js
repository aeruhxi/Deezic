import React from 'react'

const ListItem = ({ children, primaryIcon, secondaryIcon }) => {
  const secondarySpan = (
    <span className='mdl-list__item-secondary-content'>
      <a className='mdl-list__item-secondary-action' href='#'>
        <i className='material-icons'>{ secondaryIcon }</i>
      </a>
    </span>
  )

  return (
    <li className='mdl-list__item'>
      <span className='mdl-list__item-primary-content'>
        <i className='material-icons mdl-list__item-icon'>{ primaryIcon }</i>
        <span>{ children }</span>
      </span>
      { secondaryIcon && secondarySpan }
    </li>
  )
}

export default ListItem
