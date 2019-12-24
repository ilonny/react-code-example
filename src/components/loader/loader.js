import React from 'react'
import {Spin} from 'antd'

function Loader() {
  return (
    <div style={{textAlign: 'center', padding: '24px'}}>
      <Spin size="large" />
    </div>
  )
}

export default Loader
