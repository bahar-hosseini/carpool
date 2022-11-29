import React from 'react'
import { DatePickerBar } from '../components/DatePickerBar'
import Navbar from '../components/Navbar'
import Rides from '../components/Rides'
import './styles/need_ride.css'

const NeedRide = () => {
  return (
    <div>
      <div>
        search bar
        <DatePickerBar />
      </div>
      <div>
        <Rides />
      </div>
    </div>
  )
}

export default NeedRide
