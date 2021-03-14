import React from 'react'
import { Text, Icon } from 'atomize'
import { MainComponent, DashboardHeader, withAuth } from '../../components'
import { toast } from 'react-toastify'

const Dashboard: React.FC = () => {
  return(
    <>
      <MainComponent>
        <DashboardHeader />
      </MainComponent>
    </>
  )
}

export default withAuth(Dashboard)
