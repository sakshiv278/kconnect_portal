import { Avatar } from '@material-ui/core'
import React from 'react'
import './css/KconnectBox.css'

function KconnectBox() {
  return (
    <div className='kconnectBox'>
        <div className='kconnectBox__info'>
            <Avatar/>
        </div>
        <div className='kconnectBox__kconnect'><p>question??</p></div>
    </div>
  )
}

export default KconnectBox