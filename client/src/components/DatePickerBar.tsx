// import React, { useContext } from 'react'
import DatePicker from 'react-date-picker'



// import { searchContext } from '../providers/SearchProvider'

export function DatePickerBar() {

  // const { startDate, endDate, setStartDate, setEndDate } =
  //   useContext(searchContext)

  //console.log('startDate:',startDate, 'endDate: ',endDate)
  const today = new Date()
  let tomorrow = new Date()
  tomorrow.setDate(today.getDate() + 1)



  return (
    <div>
      <DatePicker />
    </div>
  )
}