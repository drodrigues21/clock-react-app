import './Quote.css'

export default function Quote({ quotes, isLoading, handleClick }) {

   return (
      <div className="quote-container">
         <div className="quote">
            {isLoading ? ("Loading...") : quotes && quotes.map(quote => (
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
