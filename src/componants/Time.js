import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch'
import './Time.css'

export default function Time() {

   // FETCH TIME AND USER IP
   const { data: date, isPending } = useFetch('http://worldtimeapi.org/api/ip')
   const [hour, setHour] = useState('')
   const [minutes, setMinutes] = useState('')


   // const [location, setLocation] = useState({})
   // const [isLoading, setIsLoading] = useState(true)
   // const [city, setCity] = useState('')
   // const [country, setCountry] = useState('')

   // console.log(location);



   useEffect(() => {
      let myDate = '';

      if (date) {
         // console.log(date);
         myDate = new Date(date.unixtime * 1000)
      }

      if (myDate) {
         setHour(myDate.getHours())
         setMinutes(myDate.getMinutes())
      }

   }, [date])

   // console.log(hour)

   // const hour = myDate.getHours()
   // const minutes = myDate.getMinutes()

   // useEffect(() => {
   //    if (date.client_ip !== undefined) {
   //       fetch(`https://api.ipbase.com/v2/info?apikey=ipb_live_Z5lxrhgX5YKUDb8VEWwp9YFOhIB61KzXNJczvliK&ip=${date.client_ip}`)
   //          .then(res => res.json())
   //          .then(json => {
   //             setLocation(json)
   //             setCity(json.data.location.city.name)
   //             setCountry(json.data.location.country.alpha2)
   //             setIsLoading(false)
   //          })
   //    }

   // }, [date.client_ip])

   // let iconSrc = ''

   // if (myDate.getHours <= 12) {
   //    iconSrc = "/assets/desktop/icon-sun.svg"
   // } else {
   //    iconSrc = "/assets/desktop/icon-moon.svg"
   // }

   // let timeOfDay = ""

   // if (myDate.getHours() > 3 && myDate.getHours() <= 11) {
   //    timeOfDay = "Good Morning"
   // } else if (myDate.getHours() >= 12 && myDate.getHours() <= 17) {
   //    timeOfDay = "Good afternoon"
   // } else {
   //    timeOfDay = "Good evening"
   // }


   return (
      <div className="time-container">
         {/* <div className="greeting">
            <img src={iconSrc} alt="" />
            <h3>{timeOfDay}</h3>
         </div> */}
         <div className="time">
            {isPending ? ("Loading...") : <h1>{hour}:{minutes}</h1>}
         </div>
         {/* <div className="location">
            {isPending ? ("Loading...") : <h2>In {city}, {country}</h2>}
         </div> */}
      </div>
   )
}