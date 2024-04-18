// import { useEffect, useState } from "react";
import MoreLessBtn from './componants/MoreLessBtn';
import Quote from './componants/Quote';
import Time from './componants/Time';
import './App.css';
import More from "./componants/More";

function App() {

  // const [quotes, setQuotes] = useState([])
  // const [date, setDate] = useState([])
  // const [isLoading, setIsLoading] = useState(true)


  // useEffect(() => {
  //   fetch('https://api.quotable.io/quotes/random')
  //     .then(res => res.json())
  //     .then(json => {
  //       setQuotes(json)
  //       setIsLoading(false)
  //     })

  // }, [])

  // useEffect(() => {
  //   fetch('http://worldtimeapi.org/api/ip')
  //     .then(res => res.json())
  //     .then(json => {
  //       setDate(json)
  //       setIsLoading(false)
  //     })
  // }, [])

  // const handleClick = () => {
  //   fetch('https://api.quotable.io/quotes/random')
  //     .then(res => res.json())
  //     .then(json => setQuotes(json))
  // }


  const handleMore = () => {
    const container = document.querySelector('.container')
    container.classList.toggle('showMore')
  }

  return (
    <div className="App">
      <div className="img-filter">
        <div className="container">
          <div className="content-container">
            <div className="left-wrap">
              <Quote />
              <Time />
            </div>
            <div className="right-wrap">
              <MoreLessBtn handleMore={handleMore} />
            </div>
          </div>
          <div className="more-container">
            <More />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
