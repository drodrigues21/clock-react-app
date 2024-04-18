import { useState, useEffect } from 'react'
import './Time.css'

export default function Time({ date }) {

   const [location, setLocation] = useState({})
   // const [isLoading, setIsLoading] = useState(true)
   const [city, setCity] = useState('')
   const [country, setCountry] = useState('')

   const myDate = new Date(date.unixtime * 1000)
   const hour = myDate.getHours()
   const minutes = myDate.getMinutes()

   useEffect(() => {

      if (date.length === undefined) {
         fetch(`https://api.ipbase.com/v2/info?apikey=ipb_live_Z5lxrhgX5YKUDb8VEWwp9YFOhIB61KzXNJczvliK&ip=${date.client_ip}`)
            .then(res => res.json())
            .then(json => {
               setLocation(json)
               setCity(json.data.location.city.name)
               setCountry(json.data.location.country.alpha2)
               setIsLoading(false)
            })
      }

   }, [date])

   let iconSrc = ''

   if (myDate.getHours <= 12) {
      iconSrc = "/assets/desktop/icon-sun.svg"
   } else {
      iconSrc = "/assets/desktop/icon-moon.svg"
   }

   let timeOfDay = ""

   if (myDate.getHours() > 3 && myDate.getHours() <= 11) {
      timeOfDay = "Good Morning"
   } else if (myDate.getHours() >= 12 && myDate.getHours() <= 17) {
      timeOfDay = "Good afternoon"
   } else {
      timeOfDay = "Good evening"
   }


   console.log(location);

   return (
      <div className="time-container">
         <div className="greeting">
            <img src={iconSrc} alt="" />
            <h3>{timeOfDay}</h3>
         </div>
         <div className="time">
            {date && <h1>{hour}:{minutes}</h1>}
         </div>
         <div className="location">
            {date && <h2>In {city}, {country}</h2>}
         </div>
      </div>
   )
}