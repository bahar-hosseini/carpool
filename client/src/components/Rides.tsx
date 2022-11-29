import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Rides = () => {
  const [ride, setRide] = useState([])

  useEffect(() => {

    axios
      .get('/api/Rides')
      // .then(()=> setDateRange(startDate, endDate))
      .then((res) => {
        setRide(res.data.data.rows)

      })
    return () => setRide([])
  }, [])


  return (
    <div>Rides
      <div>

      </div>
    </div>
  )
}

export default Rides