import React from 'react'
import { Div } from 'atomize'
// import Pagination from '../Pagination'
import Meta from '../../dtos/Meta'

import { PageLoader } from '../'

interface ListViewProps {
  data: []
  rowStruct: (data) => {rowStruct(data)}
  meta?: Meta
}

export const ListView: React.FC<ListViewProps> = ({ data, rowStruct, meta }) => {
  if (data && data.length != 0) {
    return data?.map((data, index) => { return rowStruct(data) })
  } else {
    return <PageLoader />
  }
}
