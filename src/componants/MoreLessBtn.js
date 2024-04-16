import './MoreLessBtn.css'

export default function MoreLessBtn({ handleMore }) {

   return (
      <div className="more-btn-container">
         <button onClick={handleMore}>More <span><img src="/assets/desktop/icon-arrow-down.svg" alt="" /></span></button>
      </div>
   )
}
