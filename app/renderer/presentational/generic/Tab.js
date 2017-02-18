import React from 'react'

const Tab = ({ children, tabID, active }) => {
  return (
    <div className={'mdl-tabs__panel custom-tabs__panel' + (active ? ' is-active' : '')} id={tabID}>
      { children }
    </div>
  )
}

export default Tab
