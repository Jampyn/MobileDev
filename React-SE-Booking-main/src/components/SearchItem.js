import React from 'react'

const SearchItem = () => {
  return (
    <div className='searchItem'>
     <img
     src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
     className='siImg'
     />
     <div className='siDesc'>
        <h1 className='siTitle'>Tower Street Apartment</h1>
        <span className='siDistance'>1000m from center</span>
        <span className='siTaxiOp'>Free airport</span>
        <span className='siSubtitle'>Studio Apartment with Air Conditioning</span>
        <span className='siFeatures'>
            Entire Studio -1 bathroom -21 square meters -1 full  bed
        </span>
        <span className='siCancelOp'>Free cancellation</span>    
        <span className='CancelOpsubtitle'>You can cancel later , so lock in this great price today!</span>
         </div>
         <div className='siDetails'>
            <div className='siRating'>
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className='siDetailTexis'>
                <span className='siPrice'>$112</span>
                <span className='siTaxOp'>Includes texts and fess</span>
                <button className='siCheckButton'>See availability</button>
            </div>
         </div>
    </div>
  )
}

export default SearchItem
