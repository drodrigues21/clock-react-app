import { useFetch } from '../hooks/useFetch'
import './Quote.css'

export default function Quote() {

   const { data: quotes, isPending } = useFetch('https://api.quotable.io/quotes/random')

   const handleClick = () => {
      console.log('!TODO: HANDLE CLICK EVENT FOR NEW QUOTE')
   }

   return (
      <div className="quote-container">
         <div className="quote">
            {isPending ? ("Loading...") : quotes && quotes.map(quote => (
               <div key={quote._id}>
                  <p>{quote.content}</p>
                  <h5>{quote.author}</h5>
               </div>
            ))}
         </div>
         <div className="get-new-quote" onClick={() => {
            handleClick();
         }}>
            <img src="/assets/desktop/icon-refresh.svg" alt="refresh quote" />
         </div>
      </div >
   )

}
