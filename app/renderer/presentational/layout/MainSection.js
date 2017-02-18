import React from 'react'
import SideBar from './SideBar'
import PrimaryRoot from './PrimaryRoot'
import SettingsModalContainer from './../../containers/modals/SettingsModalContainer'

const MainSection = () => {
  return (
    <main className='main-section'>
      <SideBar />
      <PrimaryRoot />
      <SettingsModalContainer />
    </main>
  )
}

export default MainSection
