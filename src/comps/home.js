import React from 'react'
import StripImgComp from './stripImgComp'
import VodListApi from './vodListApi'

export default function Home() {
  return (
    <React.Fragment>
      <StripImgComp />
      <VodListApi />
    </React.Fragment>
  )
}
